import { supabase } from "@/integrations/supabase/client";

// Utility functions to work with database tables
// Using type assertions to bypass TypeScript checks for tables not yet in types
export const db = {
  doctors: {
    async getAll() {
      const { data, error } = await (supabase as any)
        .from("doctors")
        .select(`
          id,
          specialty,
          max_patients_per_day,
          profiles:user_id (
            full_name
          )
        `);
      
      if (error) throw error;
      return data;
    },
  },
  
  appointments: {
    async getByPatientId(patientId: string) {
      const { data, error } = await (supabase as any)
        .from("appointments")
        .select(`
          id,
          appointment_date,
          appointment_time,
          concern,
          status,
          doctors:doctor_id (
            profiles:user_id (
              full_name
            ),
            specialty
          )
        `)
        .eq("patient_id", patientId)
        .order("appointment_date", { ascending: true });
      
      if (error) throw error;
      return data;
    },
    
    async create(appointment: any) {
      const { error } = await (supabase as any)
        .from("appointments")
        .insert(appointment);
      
      if (error) throw error;
    },
    
    async updateStatus(id: string, status: string) {
      const { error } = await (supabase as any)
        .from("appointments")
        .update({ status })
        .eq("id", id);
      
      if (error) throw error;
    },
  },
};

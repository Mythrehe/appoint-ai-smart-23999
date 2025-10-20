import { Users, Calendar, TrendingUp, Activity, UserPlus, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AdminDashboard = () => {
  const doctors = [
    { id: 1, name: "Dr. Sarah Johnson", specialty: "Cardiologist", patients: 3, limit: 3 },
    { id: 2, name: "Dr. Michael Chen", specialty: "Dermatologist", patients: 2, limit: 3 },
    { id: 3, name: "Dr. Emily Rodriguez", specialty: "Pediatrician", patients: 3, limit: 3 }
  ];

  const recentActivity = [
    { id: 1, action: "New appointment booked", patient: "John Doe", doctor: "Dr. Sarah Johnson", time: "10 min ago" },
    { id: 2, action: "Appointment cancelled", patient: "Jane Smith", doctor: "Dr. Michael Chen", time: "25 min ago" },
    { id: 3, action: "Appointment completed", patient: "Mike Johnson", doctor: "Dr. Emily Rodriguez", time: "1 hour ago" }
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="border-b bg-background">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-sm text-muted-foreground">Hospital Administration Portal</p>
          </div>
          <Button variant="outline" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card className="shadow-card hover:shadow-card-hover transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">248</div>
              <p className="text-xs text-muted-foreground mt-1">+12% from last month</p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-card-hover transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Doctors</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-secondary">12</div>
              <p className="text-xs text-muted-foreground mt-1">Across all specialties</p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-card-hover transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Today's Appointments</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">36</div>
              <p className="text-xs text-muted-foreground mt-1">12 completed</p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-card-hover transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Punctuality Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-secondary">94%</div>
              <p className="text-xs text-muted-foreground mt-1">+3% from last week</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Doctor Management</CardTitle>
                    <CardDescription>Monitor doctor schedules and patient loads</CardDescription>
                  </div>
                  <Button className="bg-gradient-primary">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Add Doctor
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {doctors.map((doctor) => (
                  <div
                    key={doctor.id}
                    className="p-4 border rounded-lg hover:border-primary transition-colors animate-fade-in"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-lg">{doctor.name}</h3>
                        <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                      </div>
                      <Badge variant={doctor.patients === doctor.limit ? "secondary" : "outline"}>
                        {doctor.patients}/{doctor.limit} Patients
                      </Badge>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <Button variant="outline" size="sm">View Schedule</Button>
                      <Button variant="ghost" size="sm">Edit Limit</Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest system events</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3 p-3 border rounded-lg animate-slide-in">
                    <Activity className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">
                        {activity.patient} • {activity.doctor}
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Quick Statistics</CardTitle>
                <CardDescription>This week's metrics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Cancellation Rate</span>
                    <span className="font-medium">8%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-destructive rounded-full" style={{ width: "8%" }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Doctor Utilization</span>
                    <span className="font-medium">87%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-secondary rounded-full" style={{ width: "87%" }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Patient Satisfaction</span>
                    <span className="font-medium">96%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: "96%" }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card bg-gradient-hero text-primary-foreground">
              <CardHeader>
                <CardTitle>AI Analytics</CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  Coming Soon
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">
                  After one month of data collection, AI-powered patient reliability scoring will be enabled.
                </p>
                <Button variant="secondary" className="w-full" disabled>
                  Not Yet Available
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
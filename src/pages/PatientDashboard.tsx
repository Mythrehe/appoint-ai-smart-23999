import { Calendar, Clock, User, Plus, Bell, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PatientDashboard = () => {
  const upcomingAppointments = [
    {
      id: 1,
      doctor: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      date: "2025-10-25",
      time: "10:00 AM",
      concern: "Regular checkup",
      status: "confirmed"
    },
    {
      id: 2,
      doctor: "Dr. Michael Chen",
      specialty: "Dermatologist",
      date: "2025-10-28",
      time: "2:30 PM",
      concern: "Skin consultation",
      status: "pending"
    }
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="border-b bg-background">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Patient Dashboard</h1>
            <p className="text-sm text-muted-foreground">Welcome back, John Doe</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-destructive rounded-full"></span>
            </Button>
            <Button variant="outline" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          <Card className="shadow-card hover:shadow-card-hover transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Appointments</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">12</div>
              <p className="text-xs text-muted-foreground mt-1">+2 from last month</p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-card-hover transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Upcoming</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-secondary">2</div>
              <p className="text-xs text-muted-foreground mt-1">In the next 7 days</p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-card-hover transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Completed</CardTitle>
              <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">10</div>
              <p className="text-xs text-muted-foreground mt-1">All time</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Upcoming Appointments</CardTitle>
                    <CardDescription>Your scheduled visits</CardDescription>
                  </div>
                  <Button className="bg-gradient-primary">
                    <Plus className="h-4 w-4 mr-2" />
                    Book Appointment
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="p-4 border rounded-lg hover:border-primary transition-colors animate-fade-in"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{appointment.doctor}</h3>
                        <p className="text-sm text-muted-foreground">{appointment.specialty}</p>
                      </div>
                      <Badge variant={appointment.status === "confirmed" ? "default" : "secondary"}>
                        {appointment.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{appointment.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{appointment.time}</span>
                      </div>
                    </div>
                    <p className="text-sm mt-2">
                      <span className="font-medium">Concern:</span> {appointment.concern}
                    </p>
                    <div className="flex gap-2 mt-4">
                      <Button variant="outline" size="sm">Reschedule</Button>
                      <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                        Cancel
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common tasks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  View All Doctors
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Clock className="h-4 w-4 mr-2" />
                  My Medical History
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Bell className="h-4 w-4 mr-2" />
                  Notifications
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card bg-gradient-primary text-primary-foreground">
              <CardHeader>
                <CardTitle>Available Anytime?</CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  Get notified for earlier slots
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">
                  Enable this to receive notifications when appointments become available sooner.
                </p>
                <Button variant="secondary" className="w-full">
                  Enable Notifications
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PatientDashboard;
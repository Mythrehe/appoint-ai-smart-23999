import { Calendar, Clock, User, CheckCircle2, XCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const DoctorDashboard = () => {
  const todayAppointments = [
    {
      id: 1,
      patient: "John Doe",
      time: "10:00 AM",
      concern: "Regular checkup",
      status: "scheduled"
    },
    {
      id: 2,
      patient: "Jane Smith",
      time: "11:30 AM",
      concern: "Follow-up consultation",
      status: "completed"
    },
    {
      id: 3,
      patient: "Mike Johnson",
      time: "2:00 PM",
      concern: "New patient visit",
      status: "scheduled"
    }
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="border-b bg-background">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Doctor Dashboard</h1>
            <p className="text-sm text-muted-foreground">Dr. Sarah Johnson - Cardiologist</p>
          </div>
          <Button variant="outline" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-4 mb-8">
          <Card className="shadow-card hover:shadow-card-hover transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Today's Patients</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">3</div>
              <p className="text-xs text-muted-foreground mt-1">Daily limit: 3</p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-card-hover transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Completed</CardTitle>
              <CheckCircle2 className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-secondary">1</div>
              <p className="text-xs text-muted-foreground mt-1">Today</p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-card-hover transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Scheduled</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">2</div>
              <p className="text-xs text-muted-foreground mt-1">Remaining today</p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-card-hover transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">No-Shows</CardTitle>
              <XCircle className="h-4 w-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-destructive">0</div>
              <p className="text-xs text-muted-foreground mt-1">This week</p>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Today's Schedule</CardTitle>
                <CardDescription>October 20, 2025</CardDescription>
              </div>
              <Badge variant="secondary" className="text-sm">
                3 / 3 Patients
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {todayAppointments.map((appointment) => (
              <div
                key={appointment.id}
                className="p-4 border rounded-lg hover:border-primary transition-colors animate-fade-in"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{appointment.patient}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      <span className="font-medium">Concern:</span> {appointment.concern}
                    </p>
                  </div>
                  <Badge
                    variant={appointment.status === "completed" ? "default" : "outline"}
                    className={appointment.status === "completed" ? "bg-secondary" : ""}
                  >
                    {appointment.status}
                  </Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Clock className="h-4 w-4" />
                  <span>{appointment.time}</span>
                </div>
                {appointment.status === "scheduled" && (
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-secondary hover:bg-secondary/90">
                      <CheckCircle2 className="h-4 w-4 mr-1" />
                      Complete
                    </Button>
                    <Button variant="outline" size="sm">
                      Add Notes
                    </Button>
                    <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                      <XCircle className="h-4 w-4 mr-1" />
                      No-Show
                    </Button>
                  </div>
                )}
                {appointment.status === "completed" && (
                  <div className="flex items-center gap-2 text-sm text-secondary">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Appointment completed</span>
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-card mt-6 bg-gradient-hero text-primary-foreground">
          <CardHeader>
            <div className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5" />
              <CardTitle>Daily Patient Limit</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-primary-foreground/90">
              You've reached your daily patient limit of 3 appointments. To adjust this limit, please contact the administrator.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default DoctorDashboard;
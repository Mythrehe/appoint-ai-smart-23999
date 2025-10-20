import { Calendar, Heart, Activity, ArrowRight, CheckCircle2, Users, LogOut, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Index = () => {
  const navigate = useNavigate();
  const { user, userRole, signOut } = useAuth();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          {user && (
            <div className="absolute top-4 right-4 flex items-center gap-4">
              <span className="text-white/90 text-sm">
                Welcome, {user.user_metadata?.full_name || user.email}
              </span>
              <Button
                variant="outline"
                size="sm"
                className="border-white/30 text-white hover:bg-white/10"
                onClick={signOut}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          )}
          {!user && (
            <div className="absolute top-4 right-4">
              <Button
                variant="outline"
                size="sm"
                className="border-white/30 text-white hover:bg-white/10"
                onClick={() => navigate("/auth")}
              >
                <LogIn className="h-4 w-4 mr-2" />
                Sign In
              </Button>
            </div>
          )}
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Smart Appointment Scheduling for Modern Clinics
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              AI-powered scheduling that optimizes patient care and reduces wait times. 
              Intelligent slot management with automatic notifications.
            </p>
            <div className="flex flex-wrap gap-4">
              {user ? (
                <>
                  {userRole === "patient" && (
                    <Button
                      size="lg"
                      variant="secondary"
                      className="text-lg px-8"
                      onClick={() => navigate("/patient")}
                    >
                      My Dashboard
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  )}
                  {userRole === "doctor" && (
                    <Button
                      size="lg"
                      variant="secondary"
                      className="text-lg px-8"
                      onClick={() => navigate("/doctor")}
                    >
                      Doctor Dashboard
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  )}
                  {userRole === "admin" && (
                    <Button
                      size="lg"
                      variant="secondary"
                      className="text-lg px-8"
                      onClick={() => navigate("/admin")}
                    >
                      Admin Dashboard
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  )}
                </>
              ) : (
                <>
                  <Button
                    size="lg"
                    variant="secondary"
                    className="text-lg px-8"
                    onClick={() => navigate("/auth")}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 border-white/30 text-white hover:bg-white/10"
                    onClick={() => navigate("/auth")}
                  >
                    Sign In
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Intelligent Features</h2>
            <p className="text-xl text-muted-foreground">
              Designed for efficiency, powered by AI
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-card hover:shadow-card-hover transition-all animate-fade-in">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Smart Scheduling</CardTitle>
                <CardDescription>
                  AI-optimized appointment slots that maximize doctor availability and minimize patient wait times.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-card hover:shadow-card-hover transition-all animate-fade-in [animation-delay:100ms]">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Activity className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Priority Notifications</CardTitle>
                <CardDescription>
                  Get notified instantly when earlier slots open. AI learns your preferences and reliability.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-card hover:shadow-card-hover transition-all animate-fade-in [animation-delay:200ms]">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Patient-Centric Care</CardTitle>
                <CardDescription>
                  Flexible scheduling options with "available anytime" feature for urgent care needs.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Role Cards Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Choose Your Portal</h2>
            <p className="text-xl text-muted-foreground">
              Tailored experiences for every user
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card
              className="shadow-card hover:shadow-card-hover transition-all cursor-pointer animate-slide-in"
              onClick={() => user ? navigate("/patient") : navigate("/auth")}
            >
              <CardHeader className="text-center pb-8">
                <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Patient</CardTitle>
                <CardDescription>Book and manage your appointments</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">View available doctors and time slots</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Get notifications for earlier openings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Track appointment history</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-gradient-primary">
                  Enter Portal
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card
              className="shadow-card hover:shadow-card-hover transition-all cursor-pointer animate-slide-in [animation-delay:100ms]"
              onClick={() => user ? navigate("/doctor") : navigate("/auth")}
            >
              <CardHeader className="text-center pb-8">
                <div className="mx-auto h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <Activity className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl">Doctor</CardTitle>
                <CardDescription>Manage your schedule and patients</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">View daily patient schedule</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Mark appointments as completed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Add patient notes and feedback</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-gradient-primary">
                  Enter Portal
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card
              className="shadow-card hover:shadow-card-hover transition-all cursor-pointer animate-slide-in [animation-delay:200ms]"
              onClick={() => user ? navigate("/admin") : navigate("/auth")}
            >
              <CardHeader className="text-center pb-8">
                <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Admin</CardTitle>
                <CardDescription>Hospital administration portal</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Manage doctors and patients</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">View analytics and reports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Configure system settings</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-gradient-primary">
                  Enter Portal
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 ClinicScheduler. AI-Powered Healthcare Appointments.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
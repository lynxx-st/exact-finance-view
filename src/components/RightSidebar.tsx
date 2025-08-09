import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Calendar, CheckCircle, Circle } from "lucide-react";

const RightSidebar = () => {
  const reminders = [
    {
      type: "payment",
      title: "Payment Reminder",
      date: "15 May 2020",
      description: "Reminder title will be here",
    },
    {
      type: "payment",
      title: "Payment Reminder",
      date: "15 May 2020",
      description: "Reminder title will be here",
    },
    {
      type: "task",
      title: "Task Reminder",
      date: "15 May 2020",
      description: "Reminder title will be here Reminder title will be here",
    },
  ];

  return (
    <div className="w-80 bg-background p-6 space-y-6">
      {/* Total Balance */}
      <Card className="p-4">
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-1">Total Balance (Cash + Bank)</p>
          <p className="text-2xl font-bold text-foreground">Rs. 70,000</p>
        </div>
      </Card>

      {/* Profile Completion */}
      <Card className="p-4">
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
            <div className="w-8 h-8 bg-primary rounded-full"></div>
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-foreground mb-1">Complete your Profile</h4>
            <p className="text-sm text-muted-foreground mb-3">
              You can use more app features after completing your business profile.
            </p>
            <div className="flex items-center gap-2 mb-3">
              <Progress value={30} className="flex-1 h-2" />
              <span className="text-sm font-medium text-primary">30%</span>
            </div>
            <Button size="sm" className="w-full">
              Complete Profile
            </Button>
          </div>
        </div>
      </Card>

      {/* Upcoming Reminders */}
      <Card className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-semibold text-foreground">Upcoming Reminders (06)</h4>
          <Button variant="ghost" size="sm">
            +
          </Button>
        </div>
        
        <div className="space-y-3">
          {reminders.map((reminder, index) => (
            <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">
              <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                {reminder.type === "payment" ? (
                  <Calendar className="w-4 h-4" />
                ) : (
                  <CheckCircle className="w-4 h-4" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h5 className="font-medium text-sm">{reminder.title}</h5>
                <p className="text-xs text-muted-foreground mb-1">{reminder.date}</p>
                <p className="text-xs text-muted-foreground">{reminder.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default RightSidebar;
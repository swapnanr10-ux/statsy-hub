import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Settings as SettingsIcon, Database, Bell, Shield, Monitor, Server } from "lucide-react"

const Settings = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Configure database settings and system preferences
        </p>
      </div>

      <Tabs defaultValue="database" className="space-y-4">
        <TabsList>
          <TabsTrigger value="database">Database</TabsTrigger>
          <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
        </TabsList>

        <TabsContent value="database" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                Database Configuration
              </CardTitle>
              <CardDescription>
                Configure database connection and performance settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="max-connections">Max Connections</Label>
                  <Input id="max-connections" defaultValue="200" />
                  <p className="text-sm text-muted-foreground">
                    Maximum number of concurrent connections
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="query-timeout">Query Timeout (seconds)</Label>
                  <Input id="query-timeout" defaultValue="30" />
                  <p className="text-sm text-muted-foreground">
                    Maximum query execution time
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cache-size">Cache Size (MB)</Label>
                  <Input id="cache-size" defaultValue="512" />
                  <p className="text-sm text-muted-foreground">
                    Query result cache size
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="log-level">Log Level</Label>
                  <Input id="log-level" defaultValue="INFO" />
                  <p className="text-sm text-muted-foreground">
                    Database logging level
                  </p>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h4 className="text-sm font-medium">Performance Options</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Auto-vacuum</Label>
                      <p className="text-sm text-muted-foreground">
                        Automatically clean up deleted records
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Query Optimization</Label>
                      <p className="text-sm text-muted-foreground">
                        Enable automatic query optimization
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Statistics Auto-update</Label>
                      <p className="text-sm text-muted-foreground">
                        Keep table statistics current
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="monitoring" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Monitor className="h-5 w-5" />
                Monitoring Settings
              </CardTitle>
              <CardDescription>
                Configure performance monitoring and metrics collection
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="sample-interval">Sample Interval (seconds)</Label>
                  <Input id="sample-interval" defaultValue="60" />
                  <p className="text-sm text-muted-foreground">
                    How often to collect metrics
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="retention-period">Retention Period (days)</Label>
                  <Input id="retention-period" defaultValue="30" />
                  <p className="text-sm text-muted-foreground">
                    How long to keep historical data
                  </p>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h4 className="text-sm font-medium">Monitoring Features</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Real-time Metrics</Label>
                      <p className="text-sm text-muted-foreground">
                        Enable real-time performance monitoring
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Slow Query Logging</Label>
                      <p className="text-sm text-muted-foreground">
                        Log queries that exceed time threshold
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Connection Tracking</Label>
                      <p className="text-sm text-muted-foreground">
                        Monitor active connections and sessions
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Resource Usage Alerts</Label>
                      <p className="text-sm text-muted-foreground">
                        Monitor CPU, memory, and disk usage
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notification Settings
              </CardTitle>
              <CardDescription>
                Configure alerts and notification preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="text-sm font-medium">Alert Thresholds</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="cpu-threshold">CPU Usage Alert (%)</Label>
                    <Input id="cpu-threshold" defaultValue="80" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="memory-threshold">Memory Usage Alert (%)</Label>
                    <Input id="memory-threshold" defaultValue="85" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="disk-threshold">Disk Usage Alert (%)</Label>
                    <Input id="disk-threshold" defaultValue="90" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="connection-threshold">Connection Threshold (%)</Label>
                    <Input id="connection-threshold" defaultValue="95" />
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h4 className="text-sm font-medium">Notification Methods</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Email Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Send alerts via email
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Slack Integration</Label>
                      <p className="text-sm text-muted-foreground">
                        Send alerts to Slack channel
                      </p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>SMS Alerts</Label>
                      <p className="text-sm text-muted-foreground">
                        Send critical alerts via SMS
                      </p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>In-App Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Show notifications in the portal
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Security Settings
              </CardTitle>
              <CardDescription>
                Configure security policies and access controls
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                  <Input id="session-timeout" defaultValue="60" />
                  <p className="text-sm text-muted-foreground">
                    Automatic logout after inactivity
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="max-failed-logins">Max Failed Login Attempts</Label>
                  <Input id="max-failed-logins" defaultValue="5" />
                  <p className="text-sm text-muted-foreground">
                    Account lockout threshold
                  </p>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h4 className="text-sm font-medium">Security Features</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Two-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">
                        Require 2FA for admin accounts
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>IP Whitelist</Label>
                      <p className="text-sm text-muted-foreground">
                        Restrict access to specific IP addresses
                      </p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Audit Logging</Label>
                      <p className="text-sm text-muted-foreground">
                        Log all user actions and changes
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Data Encryption</Label>
                      <p className="text-sm text-muted-foreground">
                        Encrypt sensitive data at rest
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="system" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="h-5 w-5" />
                System Configuration
              </CardTitle>
              <CardDescription>
                System-wide settings and maintenance options
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="text-sm font-medium">Backup Settings</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="backup-schedule">Backup Schedule</Label>
                    <Input id="backup-schedule" defaultValue="Daily at 2:00 AM" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="backup-retention">Backup Retention (days)</Label>
                    <Input id="backup-retention" defaultValue="30" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Automatic Backups</Label>
                    <p className="text-sm text-muted-foreground">
                      Enable scheduled database backups
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h4 className="text-sm font-medium">Maintenance</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Auto-Update Statistics</Label>
                      <p className="text-sm text-muted-foreground">
                        Automatically update table statistics
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Maintenance Mode</Label>
                      <p className="text-sm text-muted-foreground">
                        Enable maintenance mode for updates
                      </p>
                    </div>
                    <Switch />
                  </div>
                </div>
                
                <div className="pt-4 space-y-2">
                  <Button variant="outline" className="mr-2">
                    Export Configuration
                  </Button>
                  <Button variant="outline" className="mr-2">
                    Import Configuration
                  </Button>
                  <Button variant="destructive">
                    Reset to Defaults
                  </Button>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h4 className="text-sm font-medium">System Information</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label>Database Version</Label>
                    <p className="text-sm text-muted-foreground">PostgreSQL 15.4</p>
                  </div>
                  <div>
                    <Label>Portal Version</Label>
                    <p className="text-sm text-muted-foreground">v2.1.3</p>
                  </div>
                  <div>
                    <Label>Last Restart</Label>
                    <p className="text-sm text-muted-foreground">2 days ago</p>
                  </div>
                  <div>
                    <Label>Uptime</Label>
                    <p className="text-sm text-muted-foreground">99.9%</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Settings
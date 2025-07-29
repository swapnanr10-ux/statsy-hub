import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, Clock, CheckCircle, XCircle, Bell } from "lucide-react"

const activeAlerts = [
  {
    id: '1',
    level: 'critical',
    title: 'High CPU Usage',
    description: 'CPU usage has exceeded 90% for the last 5 minutes',
    timestamp: '2 minutes ago',
    source: 'System Monitor',
    action: 'Scale resources'
  },
  {
    id: '2',
    level: 'warning',
    title: 'Slow Query Detected',
    description: 'Query execution time exceeds 30s threshold',
    timestamp: '5 minutes ago',
    source: 'Query Monitor',
    action: 'Optimize query'
  },
  {
    id: '3',
    level: 'warning',
    title: 'High Connection Count',
    description: 'Connection pool is 95% utilized',
    timestamp: '12 minutes ago',
    source: 'Connection Monitor',
    action: 'Check connections'
  },
  {
    id: '4',
    level: 'critical',
    title: 'Disk Space Low',
    description: 'Database storage is 95% full',
    timestamp: '8 minutes ago',
    source: 'Storage Monitor',
    action: 'Add storage'
  },
  {
    id: '5',
    level: 'warning',
    title: 'Memory Threshold Exceeded',
    description: 'Memory usage above 85% for 10 minutes',
    timestamp: '15 minutes ago',
    source: 'Memory Monitor',
    action: 'Check processes'
  },
  {
    id: '6',
    level: 'critical',
    title: 'Replication Lag High',
    description: 'Slave is 45 seconds behind master',
    timestamp: '3 minutes ago',
    source: 'Replication Monitor',
    action: 'Check network'
  },
  {
    id: '7',
    level: 'warning',
    title: 'Index Fragmentation',
    description: 'Table orders has 78% fragmentation',
    timestamp: '1 hour ago',
    source: 'Index Monitor',
    action: 'Rebuild index'
  }
]

const recentAlerts = [
  {
    id: '4',
    level: 'info',
    title: 'Backup Completed',
    description: 'Daily backup completed successfully',
    timestamp: '1 hour ago',
    status: 'resolved'
  },
  {
    id: '5',
    level: 'warning',
    title: 'Memory Usage High',
    description: 'Memory usage reached 85%',
    timestamp: '3 hours ago',
    status: 'resolved'
  },
  {
    id: '6',
    level: 'critical',
    title: 'Connection Timeout',
    description: 'Multiple connection timeouts detected',
    timestamp: '6 hours ago',
    status: 'resolved'
  }
]

const getLevelColor = (level: string) => {
  switch (level) {
    case 'critical':
      return 'destructive'
    case 'warning':
      return 'default'
    case 'info':
      return 'secondary'
    default:
      return 'secondary'
  }
}

const getLevelIcon = (level: string) => {
  switch (level) {
    case 'critical':
      return <XCircle className="h-4 w-4" />
    case 'warning':
      return <AlertTriangle className="h-4 w-4" />
    case 'info':
      return <CheckCircle className="h-4 w-4" />
    default:
      return <Bell className="h-4 w-4" />
  }
}

const Alerts = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Alerts & Notifications</h1>
          <p className="text-muted-foreground">
            Monitor and manage database alerts and notifications
          </p>
        </div>
        <Button>
          <Bell className="w-4 h-4 mr-2" />
          Configure Alerts
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Alerts</CardTitle>
            <AlertTriangle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">3</div>
            <p className="text-xs text-muted-foreground">
              1 critical, 2 warnings
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resolved Today</CardTitle>
            <CheckCircle className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">12</div>
            <p className="text-xs text-muted-foreground">
              Average resolution time: 8min
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Response Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.2min</div>
            <p className="text-xs text-muted-foreground">
              Average response time
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Notifications</CardTitle>
            <Bell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">847</div>
            <p className="text-xs text-muted-foreground">
              Sent this week
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="active" className="space-y-4">
        <TabsList>
          <TabsTrigger value="active">Active Alerts</TabsTrigger>
          <TabsTrigger value="history">Alert History</TabsTrigger>
          <TabsTrigger value="rules">Alert Rules</TabsTrigger>
        </TabsList>

        <TabsContent value="active">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-destructive" />
                Active Alerts
              </CardTitle>
              <CardDescription>
                Alerts requiring immediate attention
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Level</TableHead>
                    <TableHead>Alert</TableHead>
                    <TableHead>Source</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {activeAlerts.map((alert) => (
                    <TableRow key={alert.id}>
                      <TableCell>
                        <Badge variant={getLevelColor(alert.level) as any} className="flex items-center gap-1">
                          {getLevelIcon(alert.level)}
                          {alert.level}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{alert.title}</div>
                          <div className="text-sm text-muted-foreground">{alert.description}</div>
                        </div>
                      </TableCell>
                      <TableCell>{alert.source}</TableCell>
                      <TableCell>{alert.timestamp}</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          {alert.action}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Recent Alert History</CardTitle>
              <CardDescription>
                Previously resolved alerts and notifications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Level</TableHead>
                    <TableHead>Alert</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentAlerts.map((alert) => (
                    <TableRow key={alert.id}>
                      <TableCell>
                        <Badge variant={getLevelColor(alert.level) as any} className="flex items-center gap-1">
                          {getLevelIcon(alert.level)}
                          {alert.level}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{alert.title}</div>
                          <div className="text-sm text-muted-foreground">{alert.description}</div>
                        </div>
                      </TableCell>
                      <TableCell>{alert.timestamp}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="text-success">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          {alert.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rules">
          <Card>
            <CardHeader>
              <CardTitle>Alert Rules Configuration</CardTitle>
              <CardDescription>
                Manage alert thresholds and notification settings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <h4 className="font-medium">CPU Usage Threshold</h4>
                    <p className="text-sm text-muted-foreground">Alert when CPU usage exceeds threshold</p>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">Warning: 80%</span>
                      <span className="text-sm">Critical: 90%</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Memory Usage Threshold</h4>
                    <p className="text-sm text-muted-foreground">Alert when memory usage exceeds threshold</p>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">Warning: 85%</span>
                      <span className="text-sm">Critical: 95%</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Query Response Time</h4>
                    <p className="text-sm text-muted-foreground">Alert when queries take too long</p>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">Warning: 10s</span>
                      <span className="text-sm">Critical: 30s</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Connection Pool</h4>
                    <p className="text-sm text-muted-foreground">Alert when connection pool is full</p>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">Warning: 90%</span>
                      <span className="text-sm">Critical: 98%</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Disk Space Threshold</h4>
                    <p className="text-sm text-muted-foreground">Alert when storage space is low</p>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">Warning: 85%</span>
                      <span className="text-sm">Critical: 95%</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Replication Lag</h4>
                    <p className="text-sm text-muted-foreground">Alert when replication falls behind</p>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">Warning: 30s</span>
                      <span className="text-sm">Critical: 60s</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Failed Login Attempts</h4>
                    <p className="text-sm text-muted-foreground">Alert on suspicious login activity</p>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">Warning: 5 attempts</span>
                      <span className="text-sm">Critical: 10 attempts</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Backup Status</h4>
                    <p className="text-sm text-muted-foreground">Alert when backups fail or are delayed</p>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">Warning: 25h overdue</span>
                      <span className="text-sm">Critical: 48h overdue</span>
                    </div>
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

export default Alerts
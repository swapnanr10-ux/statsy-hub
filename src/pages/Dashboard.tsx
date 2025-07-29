import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts'
import { Cpu, HardDrive, Activity, Users, AlertCircle, CheckCircle, Info, TrendingUp, BarChart3 } from "lucide-react"

// Mock data for charts
const cpuData = [
  { time: '00:00', usage: 45 },
  { time: '04:00', usage: 32 },
  { time: '08:00', usage: 78 },
  { time: '12:00', usage: 89 },
  { time: '16:00', usage: 67 },
  { time: '20:00', usage: 54 },
]

const memoryData = [
  { time: '00:00', memory: 4.2, swap: 1.1 },
  { time: '04:00', memory: 3.8, swap: 0.9 },
  { time: '08:00', memory: 6.5, swap: 2.3 },
  { time: '12:00', memory: 7.8, swap: 3.1 },
  { time: '16:00', memory: 6.9, swap: 2.7 },
  { time: '20:00', memory: 5.4, swap: 1.8 },
]

const eventsData = [
  { event: 'Connections', count: 1247 },
  { event: 'Queries', count: 8934 },
  { event: 'Errors', count: 23 },
  { event: 'Warnings', count: 156 },
]

const cpuCoreData = [
  { core: 'Core 1', usage: 67, temp: 68 },
  { core: 'Core 2', usage: 72, temp: 71 },
  { core: 'Core 3', usage: 59, temp: 65 },
  { core: 'Core 4', usage: 81, temp: 74 },
]

const memoryDetailData = [
  { type: 'Buffer Pool', usage: 65, size: '5.2GB' },
  { type: 'Query Cache', usage: 78, size: '1.2GB' },
  { type: 'InnoDB Buffer', usage: 82, size: '3.8GB' },
  { type: 'Temporary Tables', usage: 34, size: '512MB' },
]

const diskIOData = [
  { time: '00:00', read: 120, write: 80 },
  { time: '04:00', read: 90, write: 60 },
  { time: '08:00', read: 180, write: 140 },
  { time: '12:00', read: 220, write: 190 },
  { time: '16:00', read: 200, write: 160 },
  { time: '20:00', read: 150, write: 110 },
]

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Database Dashboard</h1>
          <p className="text-muted-foreground">
            Real-time monitoring and performance metrics
          </p>
        </div>
        <Badge variant="outline" className="text-green-500 border-green-500">
          <CheckCircle className="w-3 h-3 mr-1" />
          System Healthy
        </Badge>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">CPU Usage</CardTitle>
            <Cpu className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">67%</div>
            <Progress value={67} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-1">
              +2% from last hour
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Memory Usage</CardTitle>
            <HardDrive className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5.4GB</div>
            <Progress value={54} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-1">
              68% of 8GB total
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Connections</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground mt-1">
              +180 new sessions
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Alerts</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-warning mt-1">
              2 warnings, 1 critical
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>CPU Usage Over Time</CardTitle>
              <CardDescription>
                24-hour CPU utilization trends
              </CardDescription>
            </div>
            <Button variant="outline" size="sm">
              <Info className="w-4 h-4 mr-2" />
              Details
            </Button>
          </CardHeader>
          <CardContent>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={cpuData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="usage" 
                    stroke="hsl(var(--chart-1))" 
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>CPU Core Breakdown</CardTitle>
              <CardDescription>
                Individual core utilization
              </CardDescription>
            </div>
            <Button variant="outline" size="sm">
              <BarChart3 className="w-4 h-4 mr-2" />
              Analyze
            </Button>
          </CardHeader>
          <CardContent>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={cpuCoreData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="core" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="usage" fill="hsl(var(--chart-1))" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Disk I/O Performance</CardTitle>
              <CardDescription>
                Read/Write operations over time
              </CardDescription>
            </div>
            <Button variant="outline" size="sm">
              <TrendingUp className="w-4 h-4 mr-2" />
              Trends
            </Button>
          </CardHeader>
          <CardContent>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={diskIOData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Area 
                    type="monotone" 
                    dataKey="read" 
                    stackId="1"
                    stroke="hsl(var(--chart-1))" 
                    fill="hsl(var(--chart-1))" 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="write" 
                    stackId="1"
                    stroke="hsl(var(--chart-2))" 
                    fill="hsl(var(--chart-2))" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Memory Analysis Section */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Memory Usage</CardTitle>
              <CardDescription>
                RAM and swap memory utilization
              </CardDescription>
            </div>
            <Button variant="outline" size="sm">
              <Info className="w-4 h-4 mr-2" />
              Details
            </Button>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={memoryData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Area 
                    type="monotone" 
                    dataKey="memory" 
                    stackId="1"
                    stroke="hsl(var(--chart-2))" 
                    fill="hsl(var(--chart-2))" 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="swap" 
                    stackId="1"
                    stroke="hsl(var(--chart-3))" 
                    fill="hsl(var(--chart-3))" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Memory Allocation</CardTitle>
              <CardDescription>
                Buffer pools and cache utilization
              </CardDescription>
            </div>
            <Button variant="outline" size="sm">
              <BarChart3 className="w-4 h-4 mr-2" />
              Optimize
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {memoryDetailData.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{item.type}</span>
                    <span>{item.size} ({item.usage}%)</span>
                  </div>
                  <Progress value={item.usage} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Events and Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Database Events (Last 24 Hours)
          </CardTitle>
          <CardDescription>
            Summary of database activity and events
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={eventsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="event" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="hsl(var(--chart-1))" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Dashboard
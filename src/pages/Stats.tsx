import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

const tableSpaceData = [
  { name: 'users', size: '2.4 GB', rows: '1,250,000', growth: '+5.2%' },
  { name: 'orders', size: '1.8 GB', rows: '890,000', growth: '+12.3%' },
  { name: 'products', size: '450 MB', rows: '45,000', growth: '+2.1%' },
  { name: 'logs', size: '3.2 GB', rows: '5,800,000', growth: '+8.7%' },
]

const queryStatsData = [
  { type: 'SELECT', count: 45678, avg_time: '12ms' },
  { type: 'INSERT', count: 8934, avg_time: '8ms' },
  { type: 'UPDATE', count: 2341, avg_time: '15ms' },
  { type: 'DELETE', count: 567, avg_time: '22ms' },
]

const diskUsageData = [
  { name: 'Data', value: 65, color: 'hsl(var(--chart-1))' },
  { name: 'Logs', value: 20, color: 'hsl(var(--chart-2))' },
  { name: 'Indexes', value: 10, color: 'hsl(var(--chart-3))' },
  { name: 'Free', value: 5, color: 'hsl(var(--chart-4))' },
]

const connectionStatsData = [
  { hour: '00:00', active: 120, max: 200 },
  { hour: '04:00', active: 80, max: 200 },
  { hour: '08:00', active: 180, max: 200 },
  { hour: '12:00', active: 195, max: 200 },
  { hour: '16:00', active: 170, max: 200 },
  { hour: '20:00', active: 140, max: 200 },
]

const Stats = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Database Statistics</h1>
        <p className="text-muted-foreground">
          Detailed performance metrics and database insights
        </p>
      </div>

      <Tabs defaultValue="performance" className="space-y-4">
        <TabsList>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="storage">Storage</TabsTrigger>
          <TabsTrigger value="connections">Connections</TabsTrigger>
          <TabsTrigger value="queries">Queries</TabsTrigger>
        </TabsList>

        <TabsContent value="performance" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Throughput</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8,934</div>
                <p className="text-xs text-muted-foreground">queries/minute</p>
                <Progress value={78} className="mt-2" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Avg Response</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12ms</div>
                <p className="text-xs text-success">-3ms improvement</p>
                <Progress value={85} className="mt-2" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Cache Hit Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">94.2%</div>
                <p className="text-xs text-success">+2.1% from yesterday</p>
                <Progress value={94} className="mt-2" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Lock Waits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">23</div>
                <p className="text-xs text-warning">5 active locks</p>
                <Progress value={15} className="mt-2" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Buffer Pool Hit Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">98.7%</div>
                <p className="text-xs text-success">Excellent performance</p>
                <Progress value={98} className="mt-2" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Index Usage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">87%</div>
                <p className="text-xs text-muted-foreground">13% full table scans</p>
                <Progress value={87} className="mt-2" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Deadlocks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2</div>
                <p className="text-xs text-success">Last 24 hours</p>
                <Progress value={5} className="mt-2" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Slow Log Entries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">45</div>
                <p className="text-xs text-warning">Queries &gt; 10s</p>
                <Progress value={30} className="mt-2" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="storage" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-4 mb-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Total Storage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">124.8GB</div>
                <p className="text-xs text-muted-foreground">78% of allocated</p>
                <Progress value={78} className="mt-2" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Index Size</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">23.4GB</div>
                <p className="text-xs text-muted-foreground">18.7% of total</p>
                <Progress value={19} className="mt-2" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Log Files</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8.9GB</div>
                <p className="text-xs text-warning">Growing rapidly</p>
                <Progress value={65} className="mt-2" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Fragmentation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12%</div>
                <p className="text-xs text-muted-foreground">Within normal range</p>
                <Progress value={12} className="mt-2" />
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Disk Usage Distribution</CardTitle>
                <CardDescription>
                  Breakdown of database storage utilization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={diskUsageData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {diskUsageData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Table Space Usage</CardTitle>
                <CardDescription>
                  Storage usage by table with growth trends
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Table</TableHead>
                      <TableHead>Size</TableHead>
                      <TableHead>Rows</TableHead>
                      <TableHead>Growth</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tableSpaceData.map((table) => (
                      <TableRow key={table.name}>
                        <TableCell className="font-medium">{table.name}</TableCell>
                        <TableCell>{table.size}</TableCell>
                        <TableCell>{table.rows}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="text-success">
                            {table.growth}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="connections" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-4 mb-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Active Connections</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">167</div>
                <p className="text-xs text-muted-foreground">83.5% of max</p>
                <Progress value={83} className="mt-2" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Connection Pool</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">95%</div>
                <p className="text-xs text-warning">Near capacity</p>
                <Progress value={95} className="mt-2" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Avg Session Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">14.2min</div>
                <p className="text-xs text-muted-foreground">+2min from yesterday</p>
                <Progress value={60} className="mt-2" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Failed Connections</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">Last 24 hours</p>
                <Progress value={5} className="mt-2" />
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Connection Usage Over Time</CardTitle>
              <CardDescription>
                Active vs maximum connections throughout the day
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={connectionStatsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="active" fill="hsl(var(--chart-1))" name="Active" />
                    <Bar dataKey="max" fill="hsl(var(--chart-2))" name="Maximum" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="queries" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-4 mb-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Total Queries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2.3M</div>
                <p className="text-xs text-muted-foreground">Last 24 hours</p>
                <Progress value={78} className="mt-2" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Avg Query Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">14ms</div>
                <p className="text-xs text-success">-2ms improvement</p>
                <Progress value={85} className="mt-2" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Complex Queries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">847</div>
                <p className="text-xs text-muted-foreground">With JOINs &gt; 3 tables</p>
                <Progress value={25} className="mt-2" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Cached Queries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">89%</div>
                <p className="text-xs text-success">High cache efficiency</p>
                <Progress value={89} className="mt-2" />
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Query Statistics</CardTitle>
                <CardDescription>
                  Breakdown of query types and performance metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Query Type</TableHead>
                      <TableHead>Count (24h)</TableHead>
                      <TableHead>Avg Time</TableHead>
                      <TableHead>Performance</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {queryStatsData.map((stat) => (
                      <TableRow key={stat.type}>
                        <TableCell className="font-medium">{stat.type}</TableCell>
                        <TableCell>{stat.count.toLocaleString()}</TableCell>
                        <TableCell>{stat.avg_time}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="text-success">
                            Optimal
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Top Slow Queries</CardTitle>
                <CardDescription>
                  Queries requiring optimization attention
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 border rounded">
                    <div className="font-medium text-sm">SELECT * FROM orders WHERE...</div>
                    <div className="text-xs text-muted-foreground">Avg: 2.3s | Executions: 45</div>
                    <Progress value={90} className="mt-2" />
                  </div>
                  <div className="p-3 border rounded">
                    <div className="font-medium text-sm">UPDATE users SET status...</div>
                    <div className="text-xs text-muted-foreground">Avg: 1.8s | Executions: 23</div>
                    <Progress value={75} className="mt-2" />
                  </div>
                  <div className="p-3 border rounded">
                    <div className="font-medium text-sm">SELECT COUNT(*) FROM logs...</div>
                    <div className="text-xs text-muted-foreground">Avg: 1.2s | Executions: 67</div>
                    <Progress value={60} className="mt-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Stats
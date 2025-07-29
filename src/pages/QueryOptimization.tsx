import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import { Search, Zap, Clock, TrendingUp, AlertCircle, Play, Code } from "lucide-react"

const slowQueries = [
  {
    id: '1',
    query: 'SELECT * FROM orders o JOIN users u ON o.user_id = u.id WHERE o.created_at > ?',
    duration: '45.2s',
    executions: 23,
    avgTime: '38.7s',
    impact: 'high',
    suggestion: 'Add composite index on (user_id, created_at)'
  },
  {
    id: '2',
    query: 'UPDATE products SET stock = stock - ? WHERE id IN (?)',
    duration: '12.8s',
    executions: 156,
    avgTime: '8.2s',
    impact: 'medium',
    suggestion: 'Use batch operations instead of IN clause'
  },
  {
    id: '3',
    query: 'SELECT COUNT(*) FROM logs WHERE timestamp BETWEEN ? AND ?',
    duration: '8.4s',
    executions: 45,
    avgTime: '6.1s',
    impact: 'medium',
    suggestion: 'Partition table by timestamp'
  }
]

const indexSuggestions = [
  {
    table: 'orders',
    columns: 'user_id, created_at',
    type: 'Composite',
    impact: 'High',
    estimatedImprovement: '75%',
    queries: 12
  },
  {
    table: 'products',
    columns: 'category_id',
    type: 'Single',
    impact: 'Medium',
    estimatedImprovement: '45%',
    queries: 8
  },
  {
    table: 'logs',
    columns: 'timestamp',
    type: 'Partitioned',
    impact: 'High',
    estimatedImprovement: '80%',
    queries: 5
  }
]

const queryPatterns = [
  { pattern: 'Full Table Scan', count: 23, impact: 'High' },
  { pattern: 'Missing Index', count: 15, impact: 'High' },
  { pattern: 'Inefficient JOIN', count: 8, impact: 'Medium' },
  { pattern: 'Large Result Set', count: 12, impact: 'Medium' },
  { pattern: 'Complex Subquery', count: 5, impact: 'Low' },
]

const getImpactColor = (impact: string) => {
  switch (impact.toLowerCase()) {
    case 'high':
      return 'destructive'
    case 'medium':
      return 'default'
    case 'low':
      return 'secondary'
    default:
      return 'secondary'
  }
}

const QueryOptimization = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Query Optimization</h1>
          <p className="text-muted-foreground">
            Analyze and optimize database query performance
          </p>
        </div>
        <Button>
          <Search className="w-4 h-4 mr-2" />
          Run Analysis
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Slow Queries</CardTitle>
            <Clock className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">23</div>
            <p className="text-xs text-muted-foreground">
              Queries &gt;10s execution time
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Optimization Score</CardTitle>
            <TrendingUp className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">78%</div>
            <Progress value={78} className="mt-2" />
            <p className="text-xs text-muted-foreground">
              +5% from last week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Index Suggestions</CardTitle>
            <Zap className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">8</div>
            <p className="text-xs text-muted-foreground">
              Potential performance gains
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Query Cache Hit</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.2%</div>
            <Progress value={94} className="mt-2" />
            <p className="text-xs text-muted-foreground">
              Excellent cache performance
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="slow-queries" className="space-y-4">
        <TabsList>
          <TabsTrigger value="slow-queries">Slow Queries</TabsTrigger>
          <TabsTrigger value="indexes">Index Suggestions</TabsTrigger>
          <TabsTrigger value="patterns">Query Patterns</TabsTrigger>
          <TabsTrigger value="optimizer">Query Optimizer</TabsTrigger>
          <TabsTrigger value="analysis">Performance Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="slow-queries">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-destructive" />
                Slow Query Analysis
              </CardTitle>
              <CardDescription>
                Queries taking longer than expected execution time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Query</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Executions</TableHead>
                    <TableHead>Avg Time</TableHead>
                    <TableHead>Impact</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {slowQueries.map((query) => (
                    <TableRow key={query.id}>
                      <TableCell>
                        <div className="max-w-md">
                          <code className="text-xs bg-muted p-1 rounded">
                            {query.query.substring(0, 50)}...
                          </code>
                          <div className="text-xs text-muted-foreground mt-1">
                            {query.suggestion}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-destructive font-medium">{query.duration}</TableCell>
                      <TableCell>{query.executions}</TableCell>
                      <TableCell>{query.avgTime}</TableCell>
                      <TableCell>
                        <Badge variant={getImpactColor(query.impact) as any}>
                          {query.impact}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          Optimize
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="indexes">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-warning" />
                Index Recommendations
              </CardTitle>
              <CardDescription>
                Suggested indexes to improve query performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Table</TableHead>
                    <TableHead>Columns</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Impact</TableHead>
                    <TableHead>Est. Improvement</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {indexSuggestions.map((suggestion, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{suggestion.table}</TableCell>
                      <TableCell>
                        <code className="text-xs bg-muted p-1 rounded">
                          {suggestion.columns}
                        </code>
                      </TableCell>
                      <TableCell>{suggestion.type}</TableCell>
                      <TableCell>
                        <Badge variant={getImpactColor(suggestion.impact) as any}>
                          {suggestion.impact}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-success font-medium">
                        {suggestion.estimatedImprovement}
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          Create Index
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="patterns">
          <Card>
            <CardHeader>
              <CardTitle>Query Pattern Analysis</CardTitle>
              <CardDescription>
                Common patterns that may affect performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {queryPatterns.map((pattern, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <AlertCircle className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <h4 className="font-medium">{pattern.pattern}</h4>
                        <p className="text-sm text-muted-foreground">
                          Found in {pattern.count} queries
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={getImpactColor(pattern.impact) as any}>
                        {pattern.impact} Impact
                      </Badge>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="optimizer">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Query Optimizer
              </CardTitle>
              <CardDescription>
                Paste your SQL query to get optimization suggestions and explain plan
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">SQL Query</label>
                <Textarea 
                  placeholder="Paste your SQL query here..."
                  className="min-h-[150px] font-mono text-sm"
                />
              </div>
              <div className="flex gap-2">
                <Button>
                  <Play className="w-4 h-4 mr-2" />
                  Analyze Query
                </Button>
                <Button variant="outline">
                  <Search className="w-4 h-4 mr-2" />
                  Explain Plan
                </Button>
                <Button variant="outline">
                  Clear
                </Button>
              </div>
              
              <div className="mt-6 space-y-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2">Query Analysis Results</h4>
                  <div className="text-sm text-muted-foreground">
                    Paste a query above to see optimization suggestions, execution plan, and performance metrics.
                  </div>
                </div>
                
                <div className="grid gap-4 md:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm">Estimated Execution Time</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-lg font-bold">--</div>
                      <p className="text-xs text-muted-foreground">Run analysis first</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm">Rows Examined</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-lg font-bold">--</div>
                      <p className="text-xs text-muted-foreground">Run analysis first</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm">Optimization Score</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-lg font-bold">--</div>
                      <p className="text-xs text-muted-foreground">Run analysis first</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analysis">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Performance Metrics</CardTitle>
                <CardDescription>
                  Current database performance indicators
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Query Execution Speed</span>
                    <span>78%</span>
                  </div>
                  <Progress value={78} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Index Utilization</span>
                    <span>85%</span>
                  </div>
                  <Progress value={85} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Cache Hit Ratio</span>
                    <span>94%</span>
                  </div>
                  <Progress value={94} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Lock Efficiency</span>
                    <span>92%</span>
                  </div>
                  <Progress value={92} />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Optimization Recommendations</CardTitle>
                <CardDescription>
                  Top recommendations to improve performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium">Add Missing Indexes</h4>
                      <p className="text-sm text-muted-foreground">
                        3 critical indexes missing that could improve performance by 60%
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-warning rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium">Optimize Join Operations</h4>
                      <p className="text-sm text-muted-foreground">
                        8 queries using inefficient join patterns
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-info rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium">Review Query Cache</h4>
                      <p className="text-sm text-muted-foreground">
                        Increase cache size to improve hit ratio
                      </p>
                    </div>
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

export default QueryOptimization
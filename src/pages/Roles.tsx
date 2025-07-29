import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Users, Shield, Key, Lock, UserPlus } from "lucide-react"

const users = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@company.com',
    role: 'Database Administrator',
    status: 'active',
    lastLogin: '2 hours ago',
    permissions: ['All privileges', 'User management', 'Schema changes']
  },
  {
    id: '2',
    name: 'Sarah Smith',
    email: 'sarah.smith@company.com',
    role: 'Developer',
    status: 'active',
    lastLogin: '1 day ago',
    permissions: ['Read/Write', 'Create tables', 'Execute procedures']
  },
  {
    id: '3',
    name: 'Mike Johnson',
    email: 'mike.johnson@company.com',
    role: 'Analyst',
    status: 'active',
    lastLogin: '3 hours ago',
    permissions: ['Read only', 'Execute views', 'Generate reports']
  },
  {
    id: '4',
    name: 'Emily Brown',
    email: 'emily.brown@company.com',
    role: 'Backup Operator',
    status: 'inactive',
    lastLogin: '1 week ago',
    permissions: ['Backup databases', 'Restore operations']
  }
]

const roles = [
  {
    name: 'Database Administrator',
    description: 'Full system access and management capabilities',
    users: 2,
    permissions: ['All privileges', 'User management', 'Schema changes', 'System configuration'],
    level: 'admin'
  },
  {
    name: 'Developer',
    description: 'Development and application access',
    users: 5,
    permissions: ['Read/Write data', 'Create/Modify tables', 'Execute procedures', 'View performance'],
    level: 'developer'
  },
  {
    name: 'Analyst',
    description: 'Read-only access for data analysis',
    users: 8,
    permissions: ['Read data', 'Execute views', 'Generate reports', 'Export data'],
    level: 'analyst'
  },
  {
    name: 'Backup Operator',
    description: 'Backup and restore operations only',
    users: 2,
    permissions: ['Backup databases', 'Restore operations', 'Monitor backup jobs'],
    level: 'operator'
  }
]

const permissions = [
  { name: 'SELECT', description: 'Read data from tables', risk: 'low' },
  { name: 'INSERT', description: 'Add new records to tables', risk: 'medium' },
  { name: 'UPDATE', description: 'Modify existing records', risk: 'medium' },
  { name: 'DELETE', description: 'Remove records from tables', risk: 'high' },
  { name: 'CREATE', description: 'Create new database objects', risk: 'high' },
  { name: 'DROP', description: 'Delete database objects', risk: 'critical' },
  { name: 'ALTER', description: 'Modify database structure', risk: 'high' },
  { name: 'INDEX', description: 'Create and drop indexes', risk: 'medium' },
  { name: 'EXECUTE', description: 'Run stored procedures', risk: 'medium' },
  { name: 'GRANT', description: 'Grant permissions to others', risk: 'critical' }
]

const getRiskColor = (risk: string) => {
  switch (risk) {
    case 'critical':
      return 'destructive'
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

const getRoleColor = (level: string) => {
  switch (level) {
    case 'admin':
      return 'destructive'
    case 'developer':
      return 'default'
    case 'analyst':
      return 'secondary'
    case 'operator':
      return 'outline'
    default:
      return 'secondary'
  }
}

const getStatusColor = (status: string) => {
  return status === 'active' ? 'default' : 'secondary'
}

const Roles = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Roles & Privileges</h1>
          <p className="text-muted-foreground">
            Manage user access, roles, and database permissions
          </p>
        </div>
        <Button>
          <UserPlus className="w-4 h-4 mr-2" />
          Add User
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">17</div>
            <p className="text-xs text-muted-foreground">
              14 active, 3 inactive
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Roles</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">
              Custom role system
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Permissions</CardTitle>
            <Key className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">10</div>
            <p className="text-xs text-muted-foreground">
              System permissions available
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Security Score</CardTitle>
            <Lock className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">92%</div>
            <p className="text-xs text-muted-foreground">
              Excellent security posture
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="users" className="space-y-4">
        <TabsList>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="roles">Roles</TabsTrigger>
          <TabsTrigger value="permissions">Permissions</TabsTrigger>
          <TabsTrigger value="audit">Access Audit</TabsTrigger>
        </TabsList>

        <TabsContent value="users">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                User Management
              </CardTitle>
              <CardDescription>
                Manage database users and their access levels
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Login</TableHead>
                    <TableHead>Permissions</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarFallback>
                              {user.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{user.name}</div>
                            <div className="text-sm text-muted-foreground">{user.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={getRoleColor(user.role.toLowerCase().includes('admin') ? 'admin' : 'developer') as any}>
                          {user.role}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={getStatusColor(user.status) as any}>
                          {user.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{user.lastLogin}</TableCell>
                      <TableCell>
                        <div className="text-sm">
                          {user.permissions.length} permissions
                        </div>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="roles">
          <div className="grid gap-4 md:grid-cols-2">
            {roles.map((role, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      {role.name}
                    </CardTitle>
                    <Badge variant={getRoleColor(role.level) as any}>
                      {role.users} users
                    </Badge>
                  </div>
                  <CardDescription>{role.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Permissions:</h4>
                    <div className="flex flex-wrap gap-1">
                      {role.permissions.map((permission, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {permission}
                        </Badge>
                      ))}
                    </div>
                    <div className="pt-4 flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit Role
                      </Button>
                      <Button variant="outline" size="sm">
                        View Users
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="permissions">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="h-5 w-5" />
                Database Permissions
              </CardTitle>
              <CardDescription>
                Available permissions and their security impact
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Permission</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Risk Level</TableHead>
                    <TableHead>Usage</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {permissions.map((permission, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">
                        <code className="bg-muted px-2 py-1 rounded text-sm">
                          {permission.name}
                        </code>
                      </TableCell>
                      <TableCell>{permission.description}</TableCell>
                      <TableCell>
                        <Badge variant={getRiskColor(permission.risk) as any}>
                          {permission.risk}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          View Usage
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="audit">
          <Card>
            <CardHeader>
              <CardTitle>Access Audit Trail</CardTitle>
              <CardDescription>
                Monitor and track user access and permission changes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <div>
                      <h4 className="font-medium">Successful Login</h4>
                      <p className="text-sm text-muted-foreground">
                        john.doe@company.com - Database Administrator
                      </p>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">2 hours ago</span>
                </div>
                
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-warning rounded-full"></div>
                    <div>
                      <h4 className="font-medium">Permission Changed</h4>
                      <p className="text-sm text-muted-foreground">
                        sarah.smith@company.com granted CREATE permission
                      </p>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">6 hours ago</span>
                </div>
                
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    <div>
                      <h4 className="font-medium">Failed Login Attempt</h4>
                      <p className="text-sm text-muted-foreground">
                        Multiple failed attempts from IP 192.168.1.100
                      </p>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">1 day ago</span>
                </div>
                
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-info rounded-full"></div>
                    <div>
                      <h4 className="font-medium">New User Created</h4>
                      <p className="text-sm text-muted-foreground">
                        emily.brown@company.com - Backup Operator role
                      </p>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">2 days ago</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Roles
import { useAuth } from '@/hooks/useAuth'
import { AuthPage } from '@/components/Auth/AuthPage'
import ModernDashboard from '@/components/Dashboard/ModernDashboard'

const Index = () => {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background/95 to-primary/5">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    )
  }

  return user ? <ModernDashboard /> : <AuthPage />
};

export default Index;

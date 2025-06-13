
import { Button } from "@/components/ui/button"

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-foreground">
          Welcome to Your App
        </h1>
        <p className="text-xl text-muted-foreground">
          This is a beautiful React application built with Vite and Tailwind CSS.
        </p>
        <Button className="px-8 py-3">
          Get Started
        </Button>
      </div>
    </div>
  )
}

export default Index

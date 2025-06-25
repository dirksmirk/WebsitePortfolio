
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Enhanced animated background elements with improved visibility */}
      <div className="absolute inset-0">
        {/* Moving circles with enhanced colors and animations */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/40 dark:bg-blue-400/50 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-purple-500/45 dark:bg-purple-400/55 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-[float-reverse_10s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500/40 dark:bg-pink-400/50 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-[bounce-slow_12s_ease-in-out_infinite]"></div>
        
        {/* Additional floating elements for more dynamic effect */}
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-400/35 dark:bg-cyan-300/45 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-2xl animate-[drift_15s_linear_infinite]"></div>
        <div className="absolute bottom-1/3 left-1/5 w-56 h-56 bg-indigo-500/40 dark:bg-indigo-400/50 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-[orbit_20s_linear_infinite]"></div>
        <div className="absolute top-1/5 right-1/5 w-48 h-48 bg-violet-400/35 dark:bg-violet-300/45 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-2xl animate-[sway_14s_ease-in-out_infinite]"></div>
        
        {/* Additional random movement circles for more dynamic effect */}
        <div className="absolute top-1/3 left-1/6 w-40 h-40 bg-emerald-500/35 dark:bg-emerald-400/45 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-[random-move_18s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-1/5 right-1/6 w-52 h-52 bg-rose-500/40 dark:bg-rose-400/50 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-[spiral_16s_linear_infinite]"></div>
        <div className="absolute top-2/3 left-2/3 w-36 h-36 bg-amber-500/35 dark:bg-amber-400/45 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-2xl animate-[zigzag_22s_ease-in-out_infinite]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-foreground">Frontend Developer</span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              & UI/UX Designer
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Crafting beautiful, functional, and user-centered digital experiences 
            with modern technologies and design principles.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 px-8 py-6 text-lg inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8"
            >
              View My Work
            </button>
            <button 
              className="border-2 hover:bg-accent transform hover:scale-105 transition-all duration-200 px-8 py-6 text-lg inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8"
            >
              Download CV
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Moving circles with enhanced colors and animations */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 dark:bg-blue-400/40 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-purple-500/35 dark:bg-purple-400/45 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-[float-reverse_10s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500/30 dark:bg-pink-400/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-[bounce-slow_12s_ease-in-out_infinite]"></div>
        
        {/* Additional floating elements for more dynamic effect */}
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-400/25 dark:bg-cyan-300/35 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-2xl animate-[drift_15s_linear_infinite]"></div>
        <div className="absolute bottom-1/3 left-1/5 w-56 h-56 bg-indigo-500/30 dark:bg-indigo-400/40 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-[orbit_20s_linear_infinite]"></div>
        <div className="absolute top-1/5 right-1/5 w-48 h-48 bg-violet-400/25 dark:bg-violet-300/35 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-2xl animate-[sway_14s_ease-in-out_infinite]"></div>
        
        {/* Additional random movement circles for more dynamic effect */}
        <div className="absolute top-1/3 left-1/6 w-40 h-40 bg-emerald-500/25 dark:bg-emerald-400/35 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-[random-move_18s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-1/5 right-1/6 w-52 h-52 bg-rose-500/30 dark:bg-rose-400/40 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-[spiral_16s_linear_infinite]"></div>
        <div className="absolute top-2/3 left-2/3 w-36 h-36 bg-amber-500/25 dark:bg-amber-400/35 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-2xl animate-[zigzag_22s_ease-in-out_infinite]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-5xl sm:text-7xl lg:text-8xl block text-foreground mb-4">Dirk Hubrecht</span>
            <span className="block text-foreground">Frontend Developer</span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              & UI/UX Designer
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Crafting beautiful, functional, and user-centered digital
            experiences with modern technologies and design principles.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

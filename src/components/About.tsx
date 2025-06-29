
import { Code, Palette, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating digital experiences that bridge the gap between 
            beautiful design and functional code.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a frontend developer with UI/UX designer chops, with lots of experience helping and understanding
              customer needs. From being a first- and second-line support, to helping deliver and onboard
              B2B customers, I know and understand the perspectives of what a customer really needs.
              
              from understanding both sides of the digital product creation process. My journey 
              began with design, where I learned to think about user needs and create intuitive 
              interfaces.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My development journey began 2 years ago when I started studying at Jensen Yrkeshögskola,
              but my interest for programming and technology has been there since I was small.

              As I transitioned into development, I discovered the joy of bringing designs to 
              life with clean, efficient code. This dual expertise allows me to create seamless 
              workflows and deliver products that are not only visually stunning but also 
              technically robust.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 rounded-lg bg-accent/50 hover:bg-accent transition-colors duration-200">
                <Code className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                <h3 className="font-semibold mb-2">Development</h3>
                <p className="text-sm text-muted-foreground">Modern frameworks & clean code</p>
              </div>
              
              <div className="text-center p-6 rounded-lg bg-accent/50 hover:bg-accent transition-colors duration-200">
                <Palette className="w-8 h-8 mx-auto mb-3 text-purple-600" />
                <h3 className="font-semibold mb-2">Design</h3>
                <p className="text-sm text-muted-foreground">User-centered & accessible</p>
              </div>
              
              <div className="text-center p-6 rounded-lg bg-accent/50 hover:bg-accent transition-colors duration-200">
                <Users className="w-8 h-8 mx-auto mb-3 text-pink-600" />
                <h3 className="font-semibold mb-2">Collaboration</h3>
                <p className="text-sm text-muted-foreground">Team player & communicator</p>
              </div>
            </div>
          </div>

          <div className="relative">
              <img src="https://i.ibb.co/Sw2KJwQ5/DSC-0059.jpg" alt="photo of me" className="rounded-lg shadow-md" />
              {/* <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">JD</span>
                </div>
                <p className="text-muted-foreground">Your photo would go here</p>
              </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

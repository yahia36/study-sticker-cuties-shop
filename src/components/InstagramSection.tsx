
import { Sticker } from "lucide-react";
import { Button } from "@/components/ui/button";

const instagramPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    likes: 245,
    caption: "New motivational sticker set just dropped! Perfect for your study planner 📚✨"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    likes: 189,
    caption: "Getting ready for finals with these cute bookmarks! Which one is your favorite? 🌈"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    likes: 312,
    caption: "Study session setup with our newest planner stickers 📝 #StudyWithMe"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    likes: 274,
    caption: "Restocking these bestsellers today at 3PM EST! Set your reminders 🔔"
  }
];

const InstagramSection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 flex items-center gap-2">
              <span>Follow Us On Instagram</span>
              <Sticker className="w-8 h-8 text-softpink" />
            </h2>
            <p className="text-muted-foreground">
              @stickystudies • Join our community of 15K+ stationery lovers
            </p>
          </div>
          
          <Button 
            className="bg-gradient-to-r from-softpurple to-softpink text-white hover:opacity-90"
            asChild
          >
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
              Follow Us
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {instagramPosts.map(post => (
            <div 
              key={post.id} 
              className="group relative overflow-hidden rounded-lg aspect-square bg-gray-200"
            >
              <img 
                src={post.image} 
                alt={`Instagram post ${post.id}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay with info */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                <p className="text-sm font-medium mb-2">❤️ {post.likes} likes</p>
                <p className="text-sm line-clamp-3">{post.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;

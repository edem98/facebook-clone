import React from "react";
import "./StoryReel.css";
import Story from "./Story";

export default function Storyreel() {
  return (
    <div className="storyReel">
      <Story
        image="https://images.unsplash.com/photo-1597348469103-ddd8e854e4d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        profilSrc="https://t3.ftcdn.net/jpg/02/76/24/54/240_F_276245477_YjX5X2Ul5EBVemZ9vgMdS0f4Ar6PDZGb.jpg"
        title="longhair"
      />
      <Story
        image="https://images.unsplash.com/flagged/photo-1570745195749-742069ccc1b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        profilSrc="https://as1.ftcdn.net/jpg/03/41/55/38/500_F_341553821_BlbzaVdvDsuxXRklU53d5MIsJciPp5Oq.jpg"
        title="darkskin"
      />
      <Story
        image="https://media.gettyimages.com/photos/she-radiates-confidence-and-beauty-picture-id1098284786?s=2048x2048"
        profilSrc="https://as2.ftcdn.net/jpg/03/34/67/31/500_F_334673119_GbjPv9ikOb3c1gHGWgWV3xHOqSgY4TXB.jpg"
        title="nicesmile"
      />
      <Story
        image="https://as2.ftcdn.net/jpg/02/52/70/91/500_F_252709152_6soW3I7TAKciVxrAQeIEFnujZ5c5CWL8.jpg"
        profilSrc="https://as1.ftcdn.net/jpg/02/87/70/82/500_F_287708289_uto1AWpjQHJeULTosnQqj0qXBWLOy3Ti.jpg"
        title="intense"
      />
      <Story
        image="https://images.unsplash.com/photo-1573046928734-f6aae451e0b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        profilSrc="https://as1.ftcdn.net/jpg/03/27/39/42/500_F_327394275_N3F909IgwLn2EKKF6RUwQy2gJ7vapCM2.jpg"
        title="sexyyellow"
      />
    </div>
  );
}

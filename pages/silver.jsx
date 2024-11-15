import SilverInvitation from "@/components/invitations/silver";
import { InvitationContext } from "@/context/invitation";
import React from "react";

export default function SilverPage() {
  const mock = {
    id: "123e4567-e89b-12d3-a456-426614174000", // UUID untuk 'id'
    owner_id: "123e4567-e89b-12d3-a456-426614174001", // UUID untuk 'owner_id'
    audio: "sample_audio.mp3",
    timezone: "Asia/Jakarta",
    bride_name: "Jane",
    bride_fullname: "Jane Doe",
    bride_info: "A talented artist and a caring person with a big heart.",
    bride_instagram: "@jane_doe",
    groom_name: "John",
    groom_fullname: "John Doe",
    groom_info: "An adventurous entrepreneur with a passion for nature.",
    groom_instagram: "@john_doe",
    wedding_date: "2024-12-20", // format tanggal (YYYY-MM-DD)
    wedding_time_start: "10:00:00", // format waktu (HH:MM:SS)
    wedding_time_end: "12:00:00",
    wedding_address: "123 Wedding St, Love City",
    wedding_map:
      'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13307.5476726435!2d109.26961993366153!3d-7.425620316234632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sid!2sid!4v1731633643384!5m2!1sid!2sid',
    reception_date: "2024-12-20",
    reception_time_start: "18:00:00",
    reception_time_end: "21:00:00",
    reception_address: "456 Reception Blvd, Celebration Town",
    reception_map:
      'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13307.5476726435!2d109.26961993366153!3d-7.425620316234632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sid!2sid!4v1731633643384!5m2!1sid!2sid',
    primary_cover: "/images/cover1.jpg",
    secondary_cover: "/images/coverblackjavanese.svg",
    bride_avatar: "/images/lanang.svg",
    groom_avatar: "/images/perempuan.svg",
    slug: "jane-john-wedding",
    title: "Jane & John Wedding Invitation",
    is_groom_first: false,
    greeting: "Welcome to our wedding invitation!",
    opening_remarks: "We are so excited to share this special day with you.",
    quotes:
      "Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope.",
    source_quotes: "Maya Angelou",
    albums: JSON.stringify(["/images/gallery.svg","/images/gallery.svg","/images/gallery.svg",]),
    created_at: "2024-11-15T10:00:00", // format waktu ISO 8601
    updated_at: "2024-11-15T10:00:00",
  };

  return (
    <InvitationContext.Provider value={{ ...mock, to: "Adrian and vinka" }}>
      <SilverInvitation />
    </InvitationContext.Provider>
  );
}

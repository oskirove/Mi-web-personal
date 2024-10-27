import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  
  export default function MyAvatar() {
    return (
      <Avatar>
        <AvatarImage src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F9475242.jpg&f=1&nofb=1&ipt=bcc0ea961814b7d9b2e97c894508d1c13d2cdc83fe4415dcd8f62de1505ad4b8&ipo=images" alt="@shadcn" />
        <AvatarFallback>ÓR</AvatarFallback>
      </Avatar>
    )
  }
  
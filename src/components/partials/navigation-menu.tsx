"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { usePathname } from "next/navigation"
import { Button } from "../ui/button"

const components: { title: string; href: string; description: string }[] = [
    {
        "title": "Seafood",
        "href": "/categories/seafood",
        "description": "Resep masakan laut yang lezat."
    },
    {
        "title": "Sarapan",
        "href": "/categories/sarapan",
        "description": "Mulai hari Anda dengan resep sarapan ini."
    },
    {
        "title": "Makanan Penutup",
        "href": "/categories/makanan-penutup",
        "description": "Hidangan penutup yang manis dan lezat."
    },
    {
        "title": "Vegetarian",
        "href": "/categories/vegetarian",
        "description": "Hidangan vegetarian yang sehat dan lezat."
    },
    {
        "title": "Vegan",
        "href": "/categories/vegan",
        "description": "Resep vegan berbasis tumbuhan yang enak."
    },
    {
        "title": "Pembuka",
        "href": "/categories/pembuka",
        "description": "Makanan pembuka untuk memulai hidangan Anda."
    },
    {
        "title": "Makan Malam",
        "href": "/categories/makan-malam",
        "description": "Resep makan malam yang memuaskan."
    },
    {
        "title": "Cemilan",
        "href": "/categories/cemilan",
        "description": "Cemilan yang cepat dan mudah dibuat."
    },
    {
        "title": "Salad",
        "href": "/categories/salad",
        "description": "Resep salad yang segar dan sehat."
    },
    {
        "title": "Minuman",
        "href": "/categories/minuman",
        "description": "Minuman segar untuk menemani hari Anda."
    },
    {
        "title": "Sup",
        "href": "/categories/sup",
        "description": "Sup yang hangat dan mengenyangkan."
    },
    {
        "title": "Bebas Gluten",
        "href": "/categories/bebas-gluten",
        "description": "Resep bebas gluten yang lezat."
    },
    {
        "title": "Pasta",
        "href": "/categories/pasta",
        "description": "Hidangan pasta yang nikmat."
    },
    {
        "title": "BBQ",
        "href": "/categories/bbq",
        "description": "Resep BBQ yang berasap dan lezat."
    },
    {
        "title": "Asia",
        "href": "/categories/asia",
        "description": "Masakan Asia yang lezat dan penuh rasa."
    }
]



export function NavMenu() {

    const pathname = usePathname();

    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Button variant={pathname === "/" ? "link" : "ghost"}>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className="px-5 py-2">
                                Beranda
                            </NavigationMenuLink>
                        </Link>
                    </Button>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Button variant={pathname === "/recipe" ? "link" : "ghost"}>
                        <Link href="/recipe" legacyBehavior passHref>
                            <NavigationMenuLink className="px-5 py-2">
                                Resep
                            </NavigationMenuLink>
                        </Link>
                    </Button>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className={pathname.includes('categories') ? "text-primary" : ""}>Kategori</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                    className="h-full border min-h-[80px] hover:border-primary"
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";
import { HomeSVG, StoreSVG, TaskSVG, ProfileSVG, WalletSVG } from '@/components/Bot/icon';

const RoutesLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();

    const navItems = [
        { href: '/home', icon: HomeSVG, label: 'Home' },
        { href: '/store', icon: StoreSVG, label: 'Store' },
        { href: '/earn', icon: TaskSVG, label: 'Task' },
        { href: '/profile', icon: WalletSVG, label: 'User' },
    ];

    return (
        <div className="w-full relative bg-background h-screen">
            {children}
            <div className="fixed bg-background shadow-lg border-t border-solid left-0 right-0 bottom-0 flex items-center h-16  px-4">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                            "flex flex-col gap-0.5 items-center justify-center flex-1",
                            pathname === item.href ? "text-primary" : "text-muted-foreground"
                        )}
                    >
                        <span>
                            <item.icon
                                strokeWidth={pathname === item.href ? 2 : 1.5}
                                filled={pathname === item.href}
                                className={cn(
                                    "w-6 h-6",
                                    pathname === item.href ? "text-primary" : "text-muted-foreground"
                                )}
                            />
                        </span>
                        {/* <span
                            className={cn(
                                "text-xs",
                                pathname === item.href ? "text-primary" : "text-muted-foreground"
                            )}
                        >
                            {item.label}
                        </span> */}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default RoutesLayout;
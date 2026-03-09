import React from 'react';
import { cn } from '@/lib/utils';
import {
    LucideIcon,
    PlusIcon,
} from 'lucide-react';

type ContactInfoProps = React.ComponentProps<'div'> & {
    icon: LucideIcon;
    label: string;
    value: React.ReactNode;
};

type ContactCardProps = React.ComponentProps<'div'> & {
    // Content props
    title?: string;
    description?: string;
    contactInfo?: ContactInfoProps[];
    formSectionClassName?: string;
};

export function ContactCard({
    title = 'Contact With Us',
    description = 'If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day.',
    contactInfo,
    className,
    formSectionClassName,
    children,
    ...props
}: ContactCardProps) {
    return (
        <div
            className={cn(
                'bg-white border border-[#CED6DE]/30 relative grid h-full w-full shadow-lg md:grid-cols-2 lg:grid-cols-3 overflow-hidden rounded-sm',
                className,
            )}
            {...props}
        >
            <PlusIcon className="absolute top-3 left-3 h-4 w-4 text-[#4E9CE4]/50 pointer-events-none" />
            <PlusIcon className="absolute top-3 right-3 h-4 w-4 text-[#4E9CE4]/50 pointer-events-none" />
            <PlusIcon className="absolute bottom-3 left-3 h-4 w-4 text-[#4E9CE4]/50 pointer-events-none" />
            <PlusIcon className="absolute right-3 bottom-3 h-4 w-4 text-[#4E9CE4]/50 pointer-events-none" />

            <div className="flex flex-col justify-between lg:col-span-2 relative z-10">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] aspect-square bg-[#4E9CE4]/5 rounded-full blur-3xl pointer-events-none"></div>
                <div className="relative h-full space-y-6 px-6 py-10 md:p-12">
                    <h2 className="text-3xl font-serif font-black md:text-4xl lg:text-5xl text-[#1b326b] tracking-tight">
                        {title}
                    </h2>
                    <p className="text-slate-600 max-w-xl text-sm md:text-base font-medium leading-relaxed">
                        {description}
                    </p>
                    <div className="grid gap-6 sm:grid-cols-2 pt-6 border-t border-[#CED6DE]/30">
                        {contactInfo?.map((info, index) => (
                            <ContactInfo key={index} {...info} />
                        ))}
                    </div>
                </div>
            </div>
            <div
                className={cn(
                    'bg-[#f8fafc] flex h-full w-full items-center border-t border-[#CED6DE]/30 p-8 md:col-span-1 md:border-t-0 md:border-l relative z-10',
                    formSectionClassName,
                )}
            >
                {children}
            </div>
        </div>
    );
}

function ContactInfo({
    icon: Icon,
    label,
    value,
    className,
    ...props
}: ContactInfoProps) {
    return (
        <div className={cn('flex items-start gap-4 py-2 hover:bg-white/50 p-2 -ml-2 rounded-sm transition-colors', className)} {...props}>
            <div className="bg-[#4E9CE4]/10 rounded-sm p-3 mt-1 shrink-0">
                <Icon className="h-5 w-5 text-[#4E9CE4]" />
            </div>
            <div>
                <p className="font-bold text-[#1b326b] text-sm md:text-base tracking-wide uppercase mb-1">{label}</p>
                <div className="text-slate-600 text-sm md:text-sm font-medium">{value}</div>
            </div>
        </div>
    );
}

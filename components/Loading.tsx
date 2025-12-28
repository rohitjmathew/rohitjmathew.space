interface LoadingProps {
    size?: 'sm' | 'md' | 'lg';
    text?: string;
}

export default function Loading({ size = 'md', text = 'Loading...' }: LoadingProps) {
    const sizeClasses = {
        sm: 'h-4 w-4',
        md: 'h-6 w-6',
        lg: 'h-8 w-8'
    };

    return (
        <div className="flex items-center justify-center space-x-2">
            <div className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-gray-300 border-t-blue-600`} />
            {text && <span className="text-gray-600 dark:text-gray-400">{text}</span>}
        </div>
    );
}
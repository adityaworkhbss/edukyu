export const Breadcrumb = ({ items }) => {
    return (
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
            {items.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                    {item.href ? (
                        <a
                            href={item.href}
                            className="hover:text-foreground transition-colors"
                        >
                            {item.label}
                        </a>
                    ) : (
                        <span className="text-foreground">{item.label}</span>
                    )}
                    {index < items.length - 1 && (
                        <span className="text-muted-foreground text-xs">{'>'}</span>
                    )}
                </div>
            ))}
        </nav>
    );
};

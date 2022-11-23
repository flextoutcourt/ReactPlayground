export default function Grid({children, rows = 6, cols = 8}) {
    return (
        <div className={`grid grid-cols-${cols} grid-rows-${rows} gap-4`}>
            {/* create grid */}
            {Array(rows).fill().map((_, row) => (
                <div className={`w-full`} key={row}>
                    {Array(cols).fill().map((_, col) => (
                        <div key={col} className={`w-1/${cols}`}>
                            <p>{row} - {col}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
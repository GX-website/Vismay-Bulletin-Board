export default function SaleRate({ rate_status }) {
    return (
        <div className="z-10 p-4 text-5xl font-bold flex items-center">
            {rate_status < 80 && (
                <>
                    {rate_status}% 
                    <span className="text-orange-500 ml-4 mb-[-10px] text-3xl">Poor</span>
                </>
            )}

            {rate_status >= 80 && rate_status <= 94 && (
                <>
                    {rate_status}% 
                    <span className="text-green-500 ml-4 mb-[-10px] text-3xl">Good</span>
                </>
            )}

            {rate_status >= 95 && (
                <>
                    {rate_status}% 
                    <span className="text-green-500 ml-4 mb-[-10px] text-3xl">Excellent</span>
                </>
            )}
        </div>
    );
}

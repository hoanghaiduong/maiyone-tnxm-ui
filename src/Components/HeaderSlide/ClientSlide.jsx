import React from 'react'

function ClientSlide() {

    const ncc = [
        {
            id: 1,
            src: 'https://placehold.co/200x100/white/black',
            alt: '',
            ncc: 'FPT',
            
        },
        {
            id: 2,
            src: 'https://placehold.co/200x100/white/black',
            alt: '',
            ncc: 'FPT',
            
        },
        {
            id: 3,
            src: 'https://placehold.co/200x100/white/black',
            alt: '',
            ncc: 'FPT',
            
        },
        {
            id: 4,
            src: 'https://placehold.co/200x100/white/black',
            alt: '',
            ncc: 'FPT',
            
        },
        {
            id: 5,
            src: 'https://placehold.co/200x100/white/black',
            alt: '',
            ncc: 'FPT',
            
        },
    ];
    return (
        <div className="px-4 lg:px-6 lg:px-8">
            <div className="relative py-6 md:py-10 overflow-hidden border-b border-gray-200 border-neutral-700  after:to-transparent before:from-neutral-900 after:from-neutral-900">
                <div className="flex justify-between items-center gap-x-4">
                    {ncc.map(x=>(
                        <img src={x.src} alt={x.alt} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ClientSlide

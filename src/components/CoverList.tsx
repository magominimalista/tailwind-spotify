import Cover from "./Cover";

export function CoverList() {
    return (
        <>
            <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
            
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-4">

                <Cover 
                    image="/album1.jfif" 
                    alt="Capa de Album" 
                    title="Joane"
                />

                <Cover 
                    image="/album2.jfif" 
                    alt="Capa de Album" 
                    title="Future Nostalgia"
                />

                <Cover 
                    image="/album3.jfif" 
                    alt="Capa de Album" 
                    title="Angles"
                />

                <Cover 
                    image="/album4.jfif" 
                    alt="Capa de Album" 
                    title="By the way"
                />

                <Cover 
                    image="/album5.jfif" 
                    alt="Capa de Album" 
                    title="Can&#39;t feel my face"
                />

                <Cover 
                    image="/album6.jfif" 
                    alt="Capa de Album" 
                    title="Sam&#39;s Town"
                />
                
            </div>
        </>
    )
}

const footer = () => {
    return (
        <section>
            <footer className="bg-black text-white py-6 mt-10">
                <div className="w-full text-center">
                    <p>&copy; {new Date().getFullYear()} NutriDen. All rights reserved.</p>
                </div>
            </footer>
        </section>
    );
}

export default footer;
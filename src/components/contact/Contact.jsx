import { useRef } from 'react'
import { useTranslation } from 'react-i18next'

const Contact = () => {
    const formRef = useRef(null)
    const { t } = useTranslation()

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = new FormData(formRef.current);
        try {
            const response = await fetch(formRef.current.action, {
                method: formRef.current.method,
                body: form,
                headers: {
                    'Accept': 'application/json'
                }
            });
            if (response.ok) {
                formRef.current.reset();
                alert("Mensaje enviado!");
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="flex flex-col items-center">
            <h2 id="contact" className="py-10 text-5xl text-center text-[#dfdede]">
                {t("contact")}
            </h2>
            <form
                ref={formRef}
                className="flex flex-col items-center text-gray-500 mb-16"
                action="https://formspree.io/f/meqyrzrv"
                method="post"
                onSubmit={handleSubmit}
            >
                <div className="mb-3">
                    <label className="block">
                        {t("name")}
                    </label>
                </div>
                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder={t("name")}
                        className="w-72 p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-3 mt-6">
                    <label className="block">
                        {t("e-mail")}
                    </label>
                </div>
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        className="w-72 p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-3 mt-6">
                    <label className="block">
                        {t("message")}
                    </label>
                </div>
                <div>
                    <textarea
                        name="message"
                        placeholder={t("message")}
                        className="w-72 p-2 border border-gray-300 rounded h-32"
                    />
                </div>
                <button
                    type="submit"
                    className="mt-6 px-6 py-2 bg-white border border-gray-800 rounded hover:bg-gray-700 hover:border-gray-900 hover:text-white transition duration-300"
                >
                    {t("submit")}
                </button>
            </form>
        </div>
    );
};

export default Contact

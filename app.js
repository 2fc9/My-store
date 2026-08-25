document.addEventListener("DOMContentLoaded", () => {
    const appsContainer = document.getElementById("apps-container");

    // جلب البيانات من ملف JSON
    fetch("apps.json")
        .then(response => response.json())
        .then(data => {
            data.forEach(app => {
                // تصميم كارت لكل برنامج
                const card = document.createElement("div");
                card.className = "bg-white p-5 rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-shadow";
                
                card.innerHTML = `
                    <h2 class="text-xl font-bold text-gray-900 mb-2">${app.title}</h2>
                    <p class="text-gray-600 text-sm mb-4">${app.description}</p>
                    <div class="flex justify-between items-center mt-4">
                        <span class="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">الإصدار: ${app.version}</span>
                        <a href="${app.download_url}" target="_blank" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md text-sm transition-colors">
                            تحميل الآن
                        </a>
                    </div>
                `;
                appsContainer.appendChild(card);
            });
        })
        .catch(error => console.error("خطأ في جلب البرامج:", error));
});

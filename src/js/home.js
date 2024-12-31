document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById("wave-text");
    const text = textElement.innerText;
    textElement.innerHTML = ""; // Xóa nội dung ban đầu

    // Tạo các <span> cho từng ký tự
    text.split("").forEach((char, index) => {
        const span = document.createElement("span");
        span.innerText = char;
        span.style.setProperty("--i", index);
        textElement.appendChild(span);
    });
});

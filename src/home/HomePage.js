import React, { useEffect } from 'react'
import "../css/home.css"

export default function HomePage() {
    useEffect(() => {
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
      }, []); // Chỉ chạy khi component được render lần đầu

      useEffect(() => {
        document.title = "Home"; // Đổi title thành "Home - My Website"
      }, []); // Chỉ chạy khi component này được render lần đầu
      
    return (
        <div>
            <section >
                <div className style={{ backgroundColor: '#333333', minHeight: '100vh' }}>
                    <div className="container-fluid" >
                        <div className="row home-container">
                            <div className="col-8 text-container">
                                <div className="text-title" style={{marginTop: "10vh"}}>
                                    <p id="wave-text">WELCOME TO MY WEBSITE</p>
                                </div>
                                <div className="text-content">
                                    <div className="line"><span>Đây là nơi tôi gửi gắm những kinh nghiệm và những bài</span></div>
                                    <div className="line"><span>học quý giá mà tôi đã tích lũy trong quá trình học</span></div>
                                    <div className="line"><span>lập trình của mình.Tôi hy vọng mỗi bài viết sẽ không</span></div>
                                    <div className="line"><span>chỉ là những dòng chia sẻ, mà còn là nguồn cảm hứng</span></div>
                                    <div className="line"><span>và tài liệu hữu ích cho những ai đang trên hành trình</span></div>
                                    <div className="line"><span>khám phá thế giới lập trình.</span></div>
                                </div>
                            </div>
                            <div className="col-4 home-image">
                                <div className="window-frame">
                                    <div className="window-glass">
                                        <img className="image-content" src="/images/profile_2.jpg" alt="home" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

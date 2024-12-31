import React, { useEffect } from 'react'
import "../css/aboutme.css"

export default function AboutMe() {
    useEffect(() => {
        document.title = "About Me"; // Đổi title thành "Home - My Website"
    }, []); // Chỉ chạy khi component này được render lần đầu

    return (
        <div>
            <section className="mt-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card mb-4 dark-card">
                                <div className="card-body text-center">
                                    <img src="/images/logo.webp" alt="avatar" className="rounded-circle img-fluid dark-avatar" style={{ width: 150 }} />
                                    <h5 className="my-3 dark-text">Nguyễn Thành Nghĩa</h5>
                                    <p className="mb-1 dark-text-muted">Sinh viên</p>
                                    <p className="mb-4 dark-text-muted">Đại học công nghệ thành phố Hồ Chí Minh</p>
                                </div>
                            </div>
                            <div className="card mb-4 mb-lg-0 dark-card">
                                <div className="card-body p-0">
                                    <ul className="list-group list-group-flush rounded-3">
                                        {/*                            <li class="list-group-item d-flex justify-content-between align-items-center p-3 dark-list-item">*/}
                                        {/*                                <i class="fas fa-globe fa-lg text-warning"></i>*/}
                                        {/*                                <p class="mb-0">https://mdbootstrap.com</p>*/}
                                        {/*                            </li>*/}
                                        <li className="list-group-item d-flex justify-content-between align-items-center p-3 dark-list-item">
                                            <i className="fab fa-github fa-lg" style={{ color: 'white' }} />
                                            <p className="mb-0">https://github.com/16-NTNghia</p>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center p-3 dark-list-item">
                                            <i className="fab fa-twitter fa-lg" style={{ color: '#55acee' }} />
                                            <p className="mb-0">@BCK</p>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center p-3 dark-list-item">
                                            <i className="fab fa-instagram fa-lg" style={{ color: '#ac2bac' }} />
                                            <p className="mb-0">BCK</p>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center p-3 dark-list-item">
                                            <i className="fab fa-facebook-f fa-lg" style={{ color: '#3b5998' }} />
                                            <p className="mb-0">BCK</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="card mb-4 dark-card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3 dark-text">
                                            <p className="mb-0">Họ và tên</p>
                                        </div>
                                        <div className="col-sm-9 dark-text">
                                            <p className=" mb-0">Nguyễn Thành Nghĩa</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3 dark-text">
                                            <p className="mb-0">Email</p>
                                        </div>
                                        <div className="col-sm-9 dark-text">
                                            <p className=" mb-0">ntn16092003@gmail.com</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3 dark-text">
                                            <p className="mb-0">Nơi sinh</p>
                                        </div>
                                        <div className="col-sm-9 dark-text">
                                            <p className=" mb-0">thành phố Hồ Chí Minh</p>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                            <div className="row">
                                <div className>
                                    <div className="card mb-4 dark-card">
                                        <div className="card-body">
                                            <h4 className="mb-4"><span className="text-primary font-italic me-1">Giới thiệu</span>
                                            </h4>
                                            <h5 style={{ color: 'white', lineHeight: 2 }}>
                                                Tôi là Nguyễn Thành Nghĩa, tôi được sinh ra và lớn lên tại một thành phố lớn và sôi
                                                động bậc nhất của Việt Nam là thành phố Hồ Chí Minh.
                                                Hiện tại, tôi đang học tại trường đại học công nghệ Thành phố Hồ Chí Minh (HUTECH).
                                                Tôi làm website này là để
                                                chia sẻ những thứ mình đã học được cho mọi người.
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="card mb-4 dark-card">
                                        <div className="card-header">
                                            <h4 className="mb-4"><span className="text-primary font-italic me-1">Kỹ năng</span>
                                            </h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-sm-3 dark-text">
                                                    <p className="mb-0">Lập trình</p>
                                                </div>
                                                <div className="col-sm-9 dark-text">
                                                    <p className=" mb-0">Trung bình, khá</p>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row">
                                                <div className="col-sm-3 dark-text">
                                                    <p className="mb-0">Phân tích</p>
                                                </div>
                                                <div className="col-sm-9 dark-text">
                                                    <p className=" mb-0">trung bình</p>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row">
                                                <div className="col-sm-3 dark-text">
                                                    <p className="mb-0">Làm việc nhóm</p>
                                                </div>
                                                <div className="col-sm-9 dark-text">
                                                    <p className=" mb-0">trung bình, khá</p>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row">
                                                <div className="col-sm-3 dark-text">
                                                    <p className="mb-0">Ngoại ngữ</p>
                                                </div>
                                                <div className="col-sm-9 dark-text">
                                                    <p className=" mb-0">trung bình, khá</p>
                                                </div>
                                            </div>
                                            <hr />
                                        </div>
                                    </div>
                                    <div className="card mb-4 dark-card">
                                        <div className="card-body">
                                            <h4 className="mb-4"><span className="text-primary font-italic me-1">Chứng chỉ</span>
                                            </h4>
                                            <div className="row">
                                                <div className="col-4">
                                                    <img src="/images/networking-basics.png" height={200} width={200} alt="networking-basics" />
                                                </div>
                                                <div className="col-4">
                                                    <img src="/images/javascript-essentials-1.png" height={200} width={200} alt="javascript-essentials-1" />
                                                </div>
                                                <div className="col-4">
                                                    <img src="/images/javascript-essentials-2.png" height={200} width={200} alt="javascript-essentials-2" />
                                                </div>
                                            </div>
                                        </div>
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

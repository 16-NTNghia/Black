import React, { useEffect } from 'react'

export default function Blog6() {

    useEffect(() => {
        document.title = "Khám Phá Biến Trong JavaScript."; // Đổi title thành "Home - My Website"
    }, []); // Chỉ chạy khi component này được render lần đầu

    return (
        <div>
            <div className="container">
                <article className="post_content">
                    <div className="row">
                        <div className="d-flex col-12 align-items-center">
                            <h1 className>Khám Phá Biến Trong JavaScript.</h1>
                        </div>
                    </div>
                    <p className="post-date">Ngày đăng: 30/12/2024</p>
                    <div className="post-content">
                        <div>
                            <h3>
                                1) Biến trong lập trình
                            </h3>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                Trong toán học, biến là một ký hiệu dùng để đại diện cho giá trị có thể thay đổi. Trong lập trình,
                                biến cũng có vai trò tương tự. Chúng cho phép chúng ta lưu trữ các kết quả trung gian của các phép
                                toán trong quá trình thực thi chương trình, sửa đổi các giá trị này hoặc sử dụng chúng trong các
                                bước tiếp theo.Với sự phát triển của chương trình, các biến giúp tổ chức và xử lý các dữ liệu cần
                                thiết cho các thao tác tiếp theo. Chúng ta sẽ dần khám phá cách sử dụng biến và các khái niệm liên
                                quan trong lập trình.
                            </h5>
                        </div>
                        <div>
                            <h3 className="mt-5">
                                2) Đặt tên cho biến
                            </h3>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                Hãy tưởng tượng các biến như những chiếc hộp dùng để lưu trữ thông tin (giá trị biến). Mỗi chiếc hộp
                                phải có một tên để chúng ta dễ dàng tham chiếu đến nó.
                            </h5>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                Khi đặt tên cho biến, chúng ta thường có khá nhiều tự do, nhưng cần đảm bảo tên biến phản ánh đúng
                                thông tin mà nó lưu trữ (ví dụ: height, color, stepCounter, v.v.). JavaScript không kiểm tra sự liên
                                quan giữa tên và nội dung biến, nhưng đây là một thực hành tốt giúp người lập trình dễ dàng hiểu mã
                                nguồn hơn.
                            </h5>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                Trong hầu hết các ngôn ngữ lập trình, biến phải được khai báo trước khi sử dụng, và JavaScript cũng
                                vậy. Việc khai báo biến chỉ đơn giản là "đặt tên" cho biến, thông báo cho chương trình biết rằng tên
                                này sẽ được sử dụng để truy xuất hoặc lưu trữ giá trị.
                            </h5>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                Tên biến trong JavaScript có thể gồm chữ cái (in hoa và in thường), chữ số, dấu gạch dưới và dấu đô
                                la, nhưng không được bắt đầu bằng chữ số. Ngoài ra, có một số từ khóa đã được JavaScript dành riêng
                                và không thể sử dụng làm tên biến.
                            </h5>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                Một lưu ý quan trọng là JavaScript phân biệt chữ hoa và chữ thường, vì vậy các tên biến như <span style={{ color: 'red', fontWeight: 'bolder' }}>test</span>, <span style={{ color: 'red', fontWeight: 'bolder' }}>Test</span> hoặc <span style={{ color: 'red', fontWeight: 'bolder' }}>TEST</span> sẽ được coi là khác nhau.
                            </h5>
                            <h4>
                                <span className="ms-5" /><span style={{ color: 'coral' }}>
                                    Một số biến có trong JavaScript
                                </span>
                            </h4>
                            <div>
                                <table className="js-variables-table">
                                    <thead>
                                        <tr>
                                            <th className="js-variable-name">Tên Biến</th>
                                            <th className="js-type">Kiểu Dữ Liệu</th>
                                            <th className="js-description">Mô Tả</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="js-variable-name">var</td>
                                            <td className="js-type">Từ khóa</td>
                                            <td className="js-description">Dùng để khai báo một biến trong JavaScript, có phạm vi trong
                                                hàm.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="js-variable-name">let</td>
                                            <td className="js-type">Từ khóa</td>
                                            <td className="js-description">Dùng để khai báo một biến có phạm vi trong block, được giới thiệu
                                                trong ES6.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="js-variable-name">const</td>
                                            <td className="js-type">Từ khóa</td>
                                            <td className="js-description">Dùng để khai báo một hằng số trong block, giá trị không thể thay
                                                đổi.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="js-variable-name">undefined</td>
                                            <td className="js-type">Kiểu Dữ Liệu</td>
                                            <td className="js-description">Biểu thị một biến chưa được khởi tạo hoặc giá trị không có.</td>
                                        </tr>
                                        <tr>
                                            <td className="js-variable-name">null</td>
                                            <td className="js-type">Kiểu Dữ Liệu</td>
                                            <td className="js-description">Biểu thị sự vắng mặt của giá trị, hoặc một tham chiếu null.</td>
                                        </tr>
                                        <tr>
                                            <td className="js-variable-name">NaN</td>
                                            <td className="js-type">Đối tượng Toàn Cục</td>
                                            <td className="js-description">Biểu thị giá trị "Không phải là số" (ví dụ: phép toán toán học
                                                không hợp lệ).
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="js-variable-name">Symbol</td>
                                            <td className="js-type">Kiểu Dữ Liệu</td>
                                            <td className="js-description">Giá trị nguyên thủy duy nhất và không thay đổi được, được sử dụng
                                                để tạo các thuộc tính đối tượng.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="js-variable-name">BigInt</td>
                                            <td className="js-type">Kiểu Dữ Liệu</td>
                                            <td className="js-description">Biểu thị số nguyên có kích thước tùy ý trong JavaScript.</td>
                                        </tr>
                                        <tr>
                                            <td className="js-variable-name">Boolean</td>
                                            <td className="js-type">Kiểu Dữ Liệu</td>
                                            <td className="js-description">Biểu thị giá trị logic đúng hoặc sai (true/false).</td>
                                        </tr>
                                        <tr>
                                            <td className="js-variable-name">String</td>
                                            <td className="js-type">Kiểu Dữ Liệu</td>
                                            <td className="js-description">Biểu thị chuỗi văn bản.</td>
                                        </tr>
                                        <tr>
                                            <td className="js-variable-name">Number</td>
                                            <td className="js-type">Kiểu Dữ Liệu</td>
                                            <td className="js-description">Biểu thị số (nguyên hoặc thực).</td>
                                        </tr>
                                        <tr>
                                            <td className="js-variable-name">Object</td>
                                            <td className="js-type">Kiểu Dữ Liệu</td>
                                            <td className="js-description">Biểu thị một đối tượng, dùng để chứa các thuộc tính và phương
                                                thức.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="js-variable-name">Array</td>
                                            <td className="js-type">Kiểu Dữ Liệu</td>
                                            <td className="js-description">Biểu thị một mảng, là một tập hợp các giá trị có thể là bất kỳ
                                                kiểu dữ liệu nào.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="js-variable-name">Function</td>
                                            <td className="js-type">Kiểu Dữ Liệu</td>
                                            <td className="js-description">Biểu thị một hàm, có thể được gọi để thực thi các thao tác hoặc
                                                tính toán.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="js-variable-name">RegExp</td>
                                            <td className="js-type">Kiểu Dữ Liệu</td>
                                            <td className="js-description">Biểu thị một biểu thức chính quy, dùng để tìm kiếm và thao tác
                                                với chuỗi.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="js-variable-name">Date</td>
                                            <td className="js-type">Kiểu Dữ Liệu</td>
                                            <td className="js-description">Biểu thị một đối tượng ngày tháng và giờ.</td>
                                        </tr>
                                        <tr>
                                            <td className="js-variable-name">Error</td>
                                            <td className="js-type">Kiểu Dữ Liệu</td>
                                            <td className="js-description">Biểu thị một lỗi hoặc ngoại lệ trong chương trình.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div>
                            <h3 className="mt-5">
                                3) Khai Báo Biến
                            </h3>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                Như đã đề cập trước đó, khi khai báo biến, chúng ta "dành" tên cho nó. Thực tế, việc này cũng đồng
                                nghĩa với việc dành không gian bộ nhớ cho biến đó, nhưng khi lập trình trong JavaScript, chúng ta
                                hiếm khi phải lo lắng về việc bộ nhớ sẽ như thế nào. Thông thường, giá trị lưu trữ trong biến có thể
                                được thay đổi trong suốt quá trình thực thi của chương trình (vì chúng ta gọi nó là "biến"). Tuy
                                nhiên, điều này không phải lúc nào cũng đúng, vì chúng ta có thể khai báo các biến mà giá trị không
                                thể thay đổi. Những biến này thực chất không còn là "biến" nữa, mà chúng ta gọi chúng là "hằng số".
                                Để khai báo, chúng ta sử dụng từ khóa var hoặc let cho các biến và const cho các hằng số.
                            </h5>
                            {/* Khu vực chứa thanh số dòng và code */}
                            <div className="editor-container mb-5">
                                {/* Khu vực chứa thanh số dòng và code */}
                                <div className="code-area">
                                    <pre className="code-screen">{"                            "}<code>{"\n"}{"                                "}<span className="keyword">var</span> height;{"\n"}{"                                "}<span className="console">console.log</span>(height); <span className="comment">// -&gt; undefined</span>{"\n"}{"                                "}<span className="console">console.log</span>(weight); <span className="comment">// -&gt; Uncaught ReferenceError: weight is not defined</span>{"\n"}{"                            "}</code>{"\n"}{"                        "}</pre>
                                </div>
                            </div>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                Dòng đầu tiên là khai báo biến (chúng ta có thể thấy từ khóa var). Khai báo này có nghĩa là từ
                                height sẽ được coi là tên của vùng chứa cho các giá trị nhất định. Trong JavaScript, khi khai báo
                                biến mà chưa gán giá trị, giá trị mặc định của nó là undefined. Nếu cố gắng truy xuất một biến chưa
                                được khai báo, chương trình sẽ gặp lỗi ReferenceError.
                            </h5>
                            <h5>
                                <span className="ms-5" />
                                let là một từ khóa được giới thiệu sau var để khai báo biến trong JavaScript. Mặc dù cả hai đều dùng
                                để khai báo biến, nhưng let được khuyến khích sử dụng hiện nay thay vì var vì những lý do sẽ được
                                giải thích sau.
                            </h5>
                            <div className="editor-container mb-5">
                                {/* Khu vực chứa thanh số dòng và code */}
                                <div className="code-area">
                                    <pre className="code-screen">{"                            "}<code>{"\n"}{"                                "}<span className="keyword">let</span> height;{"\n"}{"                                "}<span className="console">console.log</span>(height); <span className="comment">// -&gt; undefined</span>{"\n"}{"                            "}</code>{"\n"}{"                        "}</pre>
                                </div>
                            </div>
                            <h5>
                                <span className="ms-5" />
                                Một trong những điểm khác biệt cơ bản trong cách sử dụng <span style={{ color: 'red', fontWeight: 'bolder' }}>var</span> và <span style={{ color: 'red', fontWeight: 'bolder' }}>let</span> là <span style={{ color: 'red', fontWeight: 'bolder' }}>let</span> ngăn chúng ta khai báo
                                một biến khác có cùng tên (sẽ tạo ra lỗi). Sử dụng <span style={{ color: 'red', fontWeight: 'bolder' }}>let</span> cho phép bạn khai báo lại một biến, điều này
                                có khả năng dẫn đến lỗi trong quá trình thực thi chương trình.
                            </h5>
                            <div className="editor-container mb-5">
                                {/* Khu vực chứa thanh số dòng và code */}
                                <div className="code-area">
                                    <pre className="code-screen">{"                            "}<code>{"\n"}{"                                "}<span className="keyword">let</span> height;{"\n"}{"                                "}<span className="console">console.log</span>(height); <span className="comment">// -&gt; undefined</span>{"\n"}{"                            "}</code>{"\n"}{"                        "}</pre>
                                </div>
                            </div>
                            <h5 style={{ lineHeight: '1.8' }}>
                                <span className="ms-5" />
                                Ví dụ trên minh họa khả năng khai báo lại một biến bằng từ khóa <span style={{ color: 'red', fontWeight: 'bolder' }}>var</span>. Trong trường hợp này, nó sẽ không gây ra
                                lỗi, nhưng trong các chương trình phức tạp hơn, việc khai báo lại, đặc biệt là vô tình, có thể không
                                còn không có hậu quả. Khi khai báo bằng <span style={{ color: 'red', fontWeight: 'bolder' }}>let</span>,
                                trình thông dịch sẽ kiểm tra xem biến đó đã được khai báo hay chưa, bất kể <span style={{ color: 'red', fontWeight: 'bolder' }}>let</span> hay <span style={{ color: 'red', fontWeight: 'bolder' }}>var</span> được sử dụng trong khai báo trước đó.
                            </h5>
                            <div className="editor-container mb-5">
                                {/* Khu vực chứa thanh số dòng và code */}
                                <div className="code-area">
                                    <pre className="code-screen">{"                            "}<code>{"\n"}{"                                "}<span className="keyword">let</span> height;{"\n"}{"                                "}<span className="keyword">let</span> height; <span className="comment">// -&gt; Uncaught SyntaxError: Identifier 'height' has already been declared</span>{"\n"}{"                                "}<span className="console">console.log</span>(height);{"\n"}{"                            "}</code>{"\n"}{"                        "}</pre>
                                </div>
                            </div>
                            <h5>
                                <span className="ms-5" />
                                Vì vậy hãy sử dụng <span style={{ color: 'red', fontWeight: 'bolder' }}>let</span> để khai báo biến, nếu
                                không muốn vô tình khai báo biến lần nữa.
                            </h5>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
}

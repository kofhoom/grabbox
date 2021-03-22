import {Form,Divider,Input, InputNumber,Button} from 'antd'
import './index.css'
function UploadPage() {
const onSubmit = (values) => {
console.log(values);
}
return (
<div id="upload-container">
    <Form name="상품업로드" onFinish={onSubmit}>
        <Form.Item name="upload" label={<div className="upload-label">상품사진</div>}>
            <div id="upload-img-placeholder">
                <img src="/images/icons/camera.png" />
                <span>이미지를 업로드해주세요.</span>
            </div>
        </Form.Item>
        <Divider />
        <Form.Item label={<div classNmae="upload-label">판매자명
</div>}name="seller" rules={[{required: true, message: '판매자 이름을 입력해 주세요' }]}>
<Input className="upload-name" size="large" placeholder="이름을입력하시요" /></Form.Item>
<Divider />
<Form.Item name="name" label={<div className="upload-lael">상품 이름</div>}
    rules={[{required: true, message: '상품 이름을 입력해 주세요' }]}
    >
    <Input className="upload-name" size="large" placeholder="상품 이름을 입력해주세요" />
</Form.Item>
<Divider />
<Form.Item name="price" label={<div className="upload-price">상품 가격</div>}
    rules={[{required: true, message: '상품 가격을 입력해 주세요' }]}
    >
    <InputNumber defaultValue={0} className="upload-price" size="large" placeholder="상품 가격을 입력해주세요" />
</Form.Item>
<Divider />
<Form.Item name="description" label={<div className="upload-price">상품 소개</div>}
    rules={[{required: true, message: '상품 소개을 입력해 주세요' }]}
    >
    <Input.TextArea id="product-description" size="large" showCount maxLength={300} placeholder="상품 소개를 입력해주세요" />
</Form.Item>
<Form.Item>
    <Button id="submit-button" size="large" htmlType="submit">
        문제등록하기
    </Button>
</Form.Item>
</Form>
</div>
)
}
export default UploadPage;

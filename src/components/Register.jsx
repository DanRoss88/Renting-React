// import {
//   AutoComplete,
//   Button,
//   Cascader,
//   Checkbox,
//   Form,
//   Input,
//   Upload,
//   Select,
//   Modal
// } from "antd";
// import { UploadOutlined } from "@ant-design/icons";
// import { Link, useNavigate } from "react-router-dom";
// import React, { useState } from "react";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import Agreement from "./Agreement";

// const { Option } = Select;

// const formItemLayout = {
//   labelCol: {
//     xs: {
//       span: 24,
//     },
//     sm: {
//       span: 8,
//     },
//   },
//   wrapperCol: {
//     xs: {
//       span: 24,
//     },
//     sm: {
//       span: 16,
//     },
//   },
// };
// const tailFormItemLayout = {
//   wrapperCol: {
//     xs: {
//       span: 24,
//       offset: 0,
//     },
//     sm: {
//       span: 16,
//       offset: 8,
//     },
//   },
// };

// export default function Register() {
//   const [agreementModalVisible, setAgreementModalVisible] = useState(false);
//   const handleAgreementModalOpen = () => {
//     setAgreementModalVisible(true);
//   };
//   const handleAgreementModalClose = () => {
//     setAgreementModalVisible(false);
//   };


//   const navigate = useNavigate();
//   const [inputValue, setInputValue] = useState({
//     full_name: "",
//     location:  "",
//     owner: false,
//     renter: false,
//     email: "",
//     password: "",
//     username: "",
//     website: "",
//     bio: "", 
//     phone: "",
//     verified: "",
//     verified_doc: "",
//     agreement: false,
//   });

//   const {
//   full_name,
//   location,
//   owner,
//   renter,
//   email,
//   password,
//   username,
//   website,
//   bio,
//   phone,
//   verified,
//   verified_doc,
//   agreement
// } = inputValue;

//   const userTypeHandler = (value) => {
//     if (value === "Owner") {
//       setInputValue({
//         ...inputValue,
//         userType: value,
//         owner: true,
//         renter: false,
//       });
//     } else {
//       setInputValue({
//         ...inputValue,
//         userType: value,
//         owner: false,
//         renter: true,
//       });
//     }
//   };
// const verificationHandler = (value) => {
//   if (value === "DriverLicense") {
//     setInputValue({
//       ...inputValue,
//       verified: true,
//     });
//   } else if (value === "Passport") {
//     setInputValue({
//       ...inputValue,
//       verified: true,
//     });
//   } else {
//     setInputValue({
//       ...inputValue,
//       verification: value,
//     });
//   }
// };
//   const handleOnChange = (e) => {
//     const { name, value } = e.target;
//     setInputValue({ ...inputValue, [name]: value });
//   };

//   const handleError = (error) => {
//     toast.error(error, {
//       position:"bottom-left",
//     });
//   };
//   const handleSuccess = (message) => {
//     toast.success(message, {
//       position:"bottom-left",
//     });
//   };

//   const handleOnSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post(
//         "http://localhost:8000/register",
//         {
//           full_name,
//           location,
//           owner,
//           renter,
//           email,
//           password,
//           username,
//           website,
//           bio,
//           phone,
//           verified,
//           verified_doc,
//           agreement
//         },
//         { withCredentials: true }
//       );
//       const { success, message } = data;
//       if (success) {
//         handleSuccess(message);
//         setTimeout(() => {
//           navigate("/");
//         }, 1000);
//       } else {
//         handleError(message);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//     setInputValue({
//       ...inputValue,
//       email: "",
//       password: "",
//       username: "",
//       full_name: "",
//       location: "",
//       phone: "",
//       owner: "",
//       renter: "",
//       website: "",
//       bio: "",
//       verification: "",
//       verificationFile: "",
//       agreement: "",
//     });
//   };

//   const [form] = Form.useForm();
//   const [fileList, setFileList] = useState([
//     {
//       uid: "-1",
//       name: " ",
//       status: "",
//       url: " ",
//     },
//   ]);
//   const onFinish = (values) => {
//     console.log("Received values of form: ", values);
//   };
//   const prefixSelector = (
//     <Form.Item name="prefix" noStyle>
//       <Select
//         style={{
//           width: 70,
//         }}
//       >
//         <Option value="+1">+1</Option>
//       </Select>
//     </Form.Item>
//   );

//   const [autoCompleteResult, setAutoCompleteResult] = useState([]);
//   const onWebsiteChange = (value) => {
//     if (!value) {
//       setAutoCompleteResult([]);
//     } else {
//       setAutoCompleteResult(
//         [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
//       );
//     }
//   };
//   const websiteOptions = autoCompleteResult.map((website) => ({
//     label: website,
//     value: website,
//   }));
//   // const handleChange = (info) => {
//   //   let newFileList = [...info.fileList];

//   //   // 1. Limit the number of uploaded files
//   //   // Only to show two recent uploaded files, and old ones will be replaced by the new
//   //   newFileList = newFileList.slice(-1);

//   //   // 2. Read from response and show file link
//   //   newFileList = newFileList.map((file) => {
//   //     if (file.response) {
//   //       // Component will show file.url as link
//   //       file.url = file.response.url;
//   //     }
//   //     return file;
//   //   });
//   //   setFileList(newFileList);
//   // };
//   // const props = {
//   //   action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
//   //   onChange: handleChange,
//   //   multiple: true,
//   // };

//   return (
//     <>
//       <Form
//         {...formItemLayout}
//         form={form}
//         name="register"
//         onFinish={onFinish}
//         initialValues={{
//           prefix: "+1",
//         }}
//         style={{
//           maxWidth: 600,
//         }}
//         scrollToFirstError
//         onSubmit={handleOnSubmit}
//       >
//         <Form.Item
//           name="email"
//           label="E-mail"
//           rules={[
//             {
//               type: "email",
//               message: "The input is not valid E-mail!",
//             },
//             {
//               required: true,
//               message: "Please input your E-mail!",
//             },
//           ]}
//         >
//           <Input value={email} onChange={handleOnChange} />
//         </Form.Item>

//         <Form.Item
//           name="password"
//           label="Password"
//           rules={[
//             {
//               required: true,
//               message: "Please input your password!",
//             },
//           ]}
//           hasFeedback
//         >
//           <Input.Password value={password} onChange={handleOnChange} />
//         </Form.Item>

//         <Form.Item
//           name="confirm"
//           label="Confirm Password"
//           dependencies={["password"]}
//           hasFeedback
//           rules={[
//             {
//               required: true,
//               message: "Please confirm your password!",
//             },
//             ({ getFieldValue }) => ({
//               validator(_, value) {
//                 if (!value || getFieldValue("password") === value) {
//                   return Promise.resolve();
//                 }
//                 return Promise.reject(
//                   new Error("The new password that you entered do not match!")
//                 );
//               },
//             }),
//           ]}
//         >
//           <Input.Password onChange={handleOnChange} />
//         </Form.Item>
//         <Form.Item
//           name="full_name"
//           label="Full Name"
//           tooltip="Your Full Name"
//           rules={[
//             {
//               required: true,
//               message: "Please enter your Full Name",
//               whitespace: true,
//             },
//           ]}
//         >
//           <Input value={full_name} onChange={handleOnChange} />
//         </Form.Item>
//         <Form.Item
//           name="username"
//           label="Username"
//           tooltip="What do you want others to call you?"
//           rules={[
//             {
//               required: true,
//               message: "Please enter your Username",
//               whitespace: true,
//             },
//           ]}
//         >
//           <Input value={username} onChange={handleOnChange} />
//         </Form.Item>

//         <Form.Item
//           name="location"
//           label="Location"
//           rules={[
//             {
//               type: "array",
//               required: true,
//               message: "Please enter your Location",
//               whitespace: true,
//             },
//           ]}
//         >
//           <Input value={location} onChange={handleOnChange} />
//         </Form.Item>

//         <Form.Item
//           name="phone"
//           label="Phone Number"
//           rules={[
//             {
//               required: true,
//               message: "Please input your phone number!",
//             },
//           ]}
//         >
//           <Input
//             addonBefore={prefixSelector}
//             style={{
//               width: "100%",
//             }}
//             value={phone}
//             onChange={handleOnChange}
//           />
//         </Form.Item>

//         <Form.Item
//           name="userType"
//           label="User Type"
//           rules={[
//             {
//               required: true,
//               message: "Please select your User Type",
//             },
//           ]}
//         >
//           <Cascader
//             options={[
//               {
//                 value: "owner",
//                 label: "Owner",
//               },
//               {
//                 value: "renter",
//                 label: "Renter",
//               },
//             ]}
//             onChange={userTypeHandler}
            
//           />
//         </Form.Item>

//         <Form.Item name="website" label="Website">
//           <AutoComplete
//             options={websiteOptions}
//             onChange={onWebsiteChange}
//             placeholder="Website"
//           >
//             <Input value={website} onChange={handleOnChange} />
//           </AutoComplete>
//         </Form.Item>

//         <Form.Item
//           name="bio"
//           label="Bio"
//           rules={[
//             {
//               required: true,
//               message: "Please enter your Bio",
//             },
//           ]}
//         >
//           <Input.TextArea
//             value={bio}
//             onChange={handleOnChange}
//             showCount
//             maxLength={100}
//           />
//         </Form.Item>

//         <Form.Item
//           name="verification"
//           label="Verification"
//           rules={[
//             {
//               required: true,
//               message: "Please upload Verification",
//             },
//           ]}
//         >
//           <Select
//             onChange={verificationHandler}
//             placeholder="Please select Government Issued ID"
//           >
//             <Option value="DriverLicense">Driver's License</Option>
//             <Option value="Passport">Passport</Option>
//             <Option value="Other">Other Government Issued ID</Option>
//           </Select>
//         </Form.Item>

//         <Form.Item
//           name="verificationFile"
//           label="Verification File"
//           rules={[
//             {
//               required: true,
//               message: "Please upload Verification File",
//             },
//           ]}
//         >
//           <Upload
//             onChange={handleOnChange}
//             value={verified_doc}
//             fileList={fileList}
//           >
//             <Button icon={<UploadOutlined />}>Upload</Button>
//           </Upload>
//         </Form.Item>

//         <Form.Item
//           name="agreement"
//           valuePropName="checked"
//           rules={[
//             {
//               validator: (_, value) =>
//                 value
//                   ? Promise.resolve()
//                   : Promise.reject(new Error("Should accept agreement")),
//             },
//           ]}
//           {...tailFormItemLayout}
//         >
//           <Checkbox value={agreement} onChange={handleOnChange}>
//             I have read the<Button type="link" onClick={handleAgreementModalOpen}>agreement</Button>
//           </Checkbox>
//         </Form.Item>
//         <Form.Item {...tailFormItemLayout}>
//           <Button type="primary" htmlType="submit" onClick={handleOnSubmit}>
//             Register
//           </Button>
//         </Form.Item>
//         <div>
//           <span>
//             Already have an account? <Link to={"/login"}>Login</Link>
//           </span>
//         </div>
//       </Form>
//       <Modal
//         title="Terms and Conditions for Renting"
//         open={agreementModalVisible}
//         onCancel={handleAgreementModalClose}
//         footer={null} // Hide the default footer buttons (e.g., OK, Cancel)
//         width={800}
//       >
//         {/* Render the Agreement component inside the modal */}
//         <Agreement />
//       </Modal>
//       <ToastContainer />
//     </>
//   );
// }

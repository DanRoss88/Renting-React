import axios from "axios";
import React, { useState, Option } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import Agreement from "../Agreement";

import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Form,
  Input,
  Upload,
  Select,
  Modal,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";

const EditProfile = () => {

  const navigate = useNavigate();
  const { id } = useParams();
  const [input, setInput] = useState({
    fullName: "",
    userType: "",
    profilePicture: "",
    bio: "",
    location: "",
    phone: "",
    website: "",
    verified: false,
    verified_doc: "",
    agreement: false,
  });
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  const {
    fullName,
    userType,
    profilePicture,
    bio,
    location,
    phone,
    website,
    verified,
    verified_doc,
    agreement,
  } = input;

  const handleOnChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setInput({
      ...input,
      [name]: inputValue,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(input);
    try {
      const { data } = await axios.post(
        "http://localhost:8000/edit-profile",
        {
          ...input,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate(`/profile/${id}`);
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInput({
      ...input,
      fullName: "",
      userType: "",
      profilePicture: "",
      bio: "",
      location: "",
      phone: "",
      website: "",
      verified: false,
      verifiedDoc: "",
      agreement: false,
    });
  };
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const userTypeHandler = (value) => {
    if (value === "owner") {
      setInput({
        ...input,
        userType: value,
        owner: true,
        renter: false,
      });
    } else {
      setInput({
        ...input,
        userType: value,
        owner: false,
        renter: true,
      });
    }
  };
  const verificationHandler = (value) => {
    if (value === "DriverLicense") {
      setInput({
        ...input,
        verified: true,
      });
    } else if (value === "Passport") {
      setInput({
        ...input,
        verified: true,
      });
    } else if (value === "Other Government ID") {
      setInput({
        ...input,
        verified: true,
      });
     } else {
      setInput({
        ...input,
        verified: false,
      });
    }
  };
  const prefixSelector = () => {
    return (
      <Form.Item name="prefix" noStyle>
        <Select
          style={{
            width: 70,
          }}
        >
          <Option value="+1">+1</Option>
        </Select>
      </Form.Item>
    );
  };
  const [agreementModalVisible, setAgreementModalVisible] = useState(false);
  const handleAgreementModalOpen = () => {
    setAgreementModalVisible(true);
  };
  const handleAgreementModalClose = () => {
    setAgreementModalVisible(false);
  };
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
      );
    }
  };
  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "",
      status: "",
      url: "",
    },
  ]);
  const handleChange = (info) => {
    let newFileList = [...info.fileList];

    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    newFileList = newFileList.slice(-1);

    // 2. Read from response and show file link
    newFileList = newFileList.map((file) => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });
    setFileList(newFileList);
  };

  return (
    <div className="edit-profile-container">
      <h1>Edit Profile</h1>
      <Form
        {...formItemLayout}
        form={form}
        name="edit-profile"
        onFinish={onFinish}
        initialValues={{
          prefix: "+1",
        }}
        style={{
          maxWidth: 600,
        }}
        scrollToFirstError
        onSubmit={handleOnSubmit}
      >
        <Form.Item
          name="full_name"
          label="Full Name"
          tooltip="Your Full Name"
          rules={[
            {
              required: true,
              message: "Please enter your Full Name",
              whitespace: true,
            },
          ]}
        >
          <Input value={fullName} onChange={handleOnChange} />
        </Form.Item>

        <Form.Item
          name="profilePicture"
          label="Profile Picture"
          rules={[
            {
              required: true,
              message: "Please upload Profile Picture",
            },
          ]}
        >
          <Upload
            onChange={handleChange}
            value={profilePicture}
            fileList={fileList}
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item
          name="location"
          label="Location"
          rules={[
            {
              type: "array",
              required: true,
              message: "Please enter your Location",
              whitespace: true,
            },
          ]}
        >
          <Input value={location} onChange={handleOnChange} />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
          ]}
        >
          <Input
            addonBefore={prefixSelector}
            style={{
              width: "100%",
            }}
            value={phone}
            onChange={handleOnChange}
          />
        </Form.Item>

        <Form.Item
          name="userType"
          label="User Type"
          rules={[
            {
              required: true,
              message: "Please select your User Type",
            },
          ]}
        >
          <Cascader
            options={[
              {
                value: "owner",
                label: "Owner",
              },
              {
                value: "renter",
                label: "Renter",
              },
            ]}
            onChange={userTypeHandler}
          />
        </Form.Item>

        <Form.Item name="website" label="Website">
          <AutoComplete
            options={websiteOptions}
            onChange={onWebsiteChange}
            placeholder="Website"
          >
            <Input value={website} onChange={handleOnChange} />
          </AutoComplete>
        </Form.Item>

        <Form.Item
          name="bio"
          label="Bio"
          rules={[
            {
              required: true,
              message: "Please enter your Bio",
            },
          ]}
        >
          <Input.TextArea
            value={bio}
            onChange={handleOnChange}
            showCount
            maxLength={100}
          />
        </Form.Item>

        <Form.Item
          name="verification"
          label="Verification"
          rules={[
            {
              required: true,
              message: "Please upload Verification",
            },
          ]}
        >
          <Select
            onChange={verificationHandler}
            placeholder="Please select Government Issued ID"
          >
            <Option value="DriverLicense">Driver's License</Option>
            <Option value="Passport">Passport</Option>
            <Option value="Other">Other Government Issued ID</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="verificationFile"
          label="Verification File"
          rules={[
            {
              required: true,
              message: "Please upload Verification File",
            },
          ]}
        >
          <Upload
            onChange={handleChange}
            value={verified_doc}
            fileList={fileList}
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("Should accept agreement")),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox value={agreement} onChange={handleOnChange}>
            I have read the
            <Button type="link" onClick={handleAgreementModalOpen}>
              agreement
            </Button>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" onClick={handleOnSubmit}>
            Submit
          </Button>
        </Form.Item>
        <div>
          <Link to={`/profile`}>Back to Profile</Link>
        </div>
      </Form>
      <Modal
        title="Terms and Conditions for Renting"
        open={agreementModalVisible}
        onCancel={handleAgreementModalClose}
        footer={null} // Hide the default footer buttons (e.g., OK, Cancel)
        width={800}
      >
        {/* Render the Agreement component inside the modal */}
        <Agreement />
      </Modal>
      <ToastContainer />
    </div>
  );
};

export default EditProfile;

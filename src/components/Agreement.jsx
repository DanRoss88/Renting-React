
import React, { useState } from 'react';
import { Modal, Button } from 'antd';

export default function Agreement() {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        View Terms and Conditions
      </Button>
      <Modal
        title="Terms and Conditions for Renting Property Rental App"
        open={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={800} // You can adjust the width of the modal as per your requirement
      >
        <div className="agreement-page">
          <div className="agreement-page__form">
            <p>
        TERMS AND CONDITIONS FOR RENTING PROPERTY RENTAL APP

Effective Date: July 24, 2023

Welcome to Renting Property Rental App ("Renting")! By using our app, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our app.

1. DEFINITIONS

- "Renting" refers to the Renting Property Rental App and its operators.
- "User" or "you" refers to anyone who accesses or uses the Renting app.

2. ACCEPTANCE OF TERMS

By using the Renting app, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions, our Privacy Policy, and any additional guidelines, terms, or rules posted on the app.

3. ELIGIBILITY

You must be at least 18 years old to use the Renting app. By using the app, you represent and warrant that you are of legal age to form a binding contract.

4. PROPERTY LISTINGS

4.1 Accuracy of Information
Renting strives to provide accurate and up-to-date information on property listings. However, we do not warrant the accuracy, completeness, or reliability of any property listings or information provided by users.

4.2 User Content
Users may submit content, including property listings and reviews. By submitting content, users grant Renting a worldwide, non-exclusive, royalty-free, perpetual, and irrevocable license to use, reproduce, modify, adapt, publish, translate, distribute, and display such content.

5. BOOKINGS AND PAYMENTS

5.1 Bookings
Renting is a platform that facilitates communication between property owners and potential renters. Any bookings made through our app are agreements solely between the property owner and the renter. Renting is not a party to any rental or booking agreement.

5.2 Payment Processing
Renting may provide payment processing services for bookings made through our platform. All payment processing services are provided by third-party payment processors. Renting disclaims any liability for any payment processing errors or disputes.

6. LIMITATION OF LIABILITY

6.1 Disclaimers
Renting provides its app on an "as is" and "as available" basis. We make no warranties or representations, express or implied, regarding the app's accuracy, availability, or suitability for any particular purpose.

6.2 Indemnification
You agree to indemnify and hold Renting harmless from any claims, liabilities, damages, losses, or expenses (including attorneys' fees) arising out of or related to your use of the app or violation of these Terms and Conditions.

7. PROHIBITED ACTIVITIES

You agree not to engage in any of the following activities while using the Renting app:
- Posting false or misleading information.
- Violating any applicable laws or regulations.
- Harassing, threatening, or abusing other users.
- Uploading or distributing malicious software or content.

8. INTELLECTUAL PROPERTY

All content and materials on the Renting app, including logos, trademarks, images, text, and other intellectual property, are owned by Renting or its licensors and are protected by intellectual property laws.

9. TERMINATION

Renting reserves the right to terminate or suspend your access to the app at any time for any reason, including but not limited to violations of these Terms and Conditions.

10. GOVERNING LAW AND JURISDICTION

These Terms and Conditions shall be governed by and construed in accordance with the laws of Canada. Any dispute arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of [Your Jurisdiction].

11. MODIFICATIONS

Renting reserves the right to modify or update these Terms and Conditions at any time. We will notify users of any material changes. Continued use of the app after such changes constitutes acceptance of the updated terms.

12. CONTACT INFORMATION

If you have any questions or concerns about these Terms and Conditions, please contact us at dan@fremen.ca.
        </p>
      </div>
    </div>
      </Modal>
    </>
  )
};
import React from 'react';
import './TermsOfService.css';

import Logo from '../../../components/Logo/Logo';

import Contact from '../Contact/Contact';
import About from '../About/About';
import Footer from '../../../components/Footer/Footer';

import {
    Route,
    NavLink
  } from "react-router-dom";

const TermsOfService = (props) => {

    const onClickHandler = () => {
        props.history.push('/login'); 
    }

    return (
        <div>
            <ul className="head">
                <Logo />
                <li><NavLink to="/" replace> HOME </NavLink></li>
                <li><NavLink to="/contact" replace> CONTACT </NavLink></li>
                <li><NavLink to="/about" replace> ABOUT </NavLink></li>
                <button 
                    type="submit"
                    className="Button"
                    onClick={(event) => onClickHandler(event)} >
                    SIGN IN
                </button> 
            </ul>
            <div className="content">
                <Route exact path="/"  />
                <Route path="/contact" component={Contact} />
                <Route path="/about" component={About} />
            </div>

            <div className="Font" align="center">
                <h1>TERMS OF USE</h1>
            </div>

            <div align="center">
            Welcome! These Terms of Use and all other legal documents incorporated by reference (collectively, the “Terms") set forth the legal contract between BOLD LLC (352385) and Auxiliant S.à.r.l (B199343) (collectively, “Provider,” “we,” or “us”) and each end user ("User" or "you" or “your”) with respect to access to and use of our associated internet properties as linked and offered by us, our subsidiaries and affiliated companies, and any software that we provide to you for download in your mobile devices (each a "mobile application") (all of these collectively, the “Site”). Unless otherwise specified, all references to “Site” also include the use of our online platform, materials, proprietary content, tools, software, and services available through the Site (collectively, all of these and the Site are called the “Service”). 

PLEASE READ THESE TERMS CAREFULLY BEFORE USING THE SERVICE, BECAUSE THEY AFFECT YOUR LEGAL RIGHTS AND OBLIGATIONS. IF YOU DO NOT AGREE TO BE BOUND BY THESE TERMS, OR IF AT ANY TIME, THE TERMS ARE NO LONGER ACCEPTABLE TO YOU, PLEASE CEASE USE OF THE SERVICE IMMEDIATELY. 

Terms of Use Highlights

Please also read our full Terms of Use

Your Acceptance

Each time you access and/or use the Service, you agree to be bound by these Terms and any Additional Terms (defined in Section 3(d)) that will apply to you, prospectively.
Your Privacy

We collect certain information to perform the Service and to allow Provider or third parties to contact you as part of the services provided. You agree that we can use the information as outlined in our Privacy Policy.
Payments, Subscriptions and Cancellations

You will honor your payment obligations for services you purchase on the Site. For recurring charges applicable to your subscription, you agree that third-parties working on our behalf may store your payment information to process the payments. Provider has the discretion to alter prices of its services at any time. You understand that additional fees and taxes may apply to your purchase. You may cancel or suspend your subscription at any time by going to the home page under My Accounts and My Settings. Please refer to our Cancellations section for more information. Provider does not guarantee refunds.
Arbitration of All Disputes; No Class Relief

These Terms contain a dispute resolution and arbitration provision, including a class action waiver that affects your rights.  Please note that, depending on your country of residence, under certain circumstances you may be able to bring a dispute before the appropriate authorities or courts in the country in which you reside.
For US Residents, any disputes under these Terms will be resolved on an individual basis through binding arbitration, with no class relief.
Our Content, Intellectual Property, Copyrights and Trademarks

You may not use, copy, reproduce, republish, upload, sale, resale, display, post, transmit, distribute, scrape, reverse engineer, or license any content or intellectual property, copyrights and trademarks on the Service without the Provider’s authorization.
Disclaimer of Warranties

To the extent permitted by law, we disclaim warranties and conditions and provide the Service “As is”.
Limitation of Liability

To the extent permitted by law, our liability is limited.
Contact

Questions about these Terms may be sent to support@bold.com or as otherwise set forth in these Terms.
 

Full Terms of Use

1. Your Acceptance and Contractual Relationship.

You represent and warrant that you are of age under the laws of your jurisdiction and/or lawfully able to enter into contracts. If you are not legally able to enter into contracts, you shall not use the Service at any time or in any manner or submit any information to Provider or the Service.  

 

2. Privacy.

Your privacy is important to us. Please review Provider’s Privacy Policy which explains how we use information that you submit to Provider and the choices you can make about the way this information is collected and used. The Privacy Policy is hereby incorporated by reference.

 

3.  Modifications to the Terms or to the Service.

(a) Terms. Provider can change, update, add or remove provisions of these Terms, at any time by posting the updated Terms on the Site and by providing a notice on the Site. If you do not agree with any of the updated Terms, you must stop using the Service.

(b) Service. Provider may make changes to the Service at any time, without notice. If you object to any changes to the Service, your only recourse will be to cease using it. Continued use of the Service following posting of any such changes will indicate your acknowledgement of such changes and satisfaction with the Service as modified. We also reserve the right to discontinue the Service or any component of it, at any time without notice. We will not be liable to you or any third-party should we exercise our right to modify or discontinue the Service.

(c) Paid subscriptions. Please note that if you are under paid subscription services with us, in the event we change the price for the services which you have previously agreed to pay or if we substantially change the services you are paying for, we will notify you of such changes as contemplated in Section 3(a).  Any changes will become effective as of, and reflected on, your next scheduled payment. If you do not agree with such changes you may cancel your paid subscription by communicating with us in accordance with the Cancellation section below. 

(d) Additional Terms. In addition, certain features of the Service may be subject to additional terms of use (“Additional Terms”), which shall be provided to you at the moment you choose to use such features. By using such features, or any part thereof, you agree to be bound by the Additional Terms applicable to such features. In the event that any of the Additional Terms governing such area conflict with these Terms, the Additional Terms will govern.

 

4.  Use of Our Service and Accounts

We provide resume and curriculum vitae building services and tools. For as long as you agree to these Terms and abide by them, you may use the Service. These Terms apply to all Users of the Service, including Visitors and Registered Users.

(a) Visitors.  Visitors may browse the Site in accordance with these Terms, but will not have full access to the Service (which may include but are not limited to contributing content, downloading tools, posting comments or signing up for special programs) without first becoming “Registered Users”.  

(b) Registered Users and Accounts.  In order to access certain features of the Service you may be required to become a Registered User.  A “Registered User” is a User who has registered an account with us (your “Account”) or who has a valid account on the social networking service (“SNS”) through which the User has connected to the Service (each such account, a “Third-Party Account”).   

(c) Registration Data.  In registering for the Service, you agree to (i) provide true, accurate, current and complete information about yourself as prompted by the Service’s registration form (the “Registration Data”); and (ii) maintain and promptly update the Registration Data to keep it true, accurate, current and complete.  You are responsible for all activities that occur under your Account.   You may not share your Account or password with anyone, and you agree to (A) notify Provider immediately of any unauthorized use of your password or any other breach of security at support@bold.com; and (B) exit from your Account at the end of each session.  If you provide any information that is untrue, inaccurate, not current or incomplete, or Provider has reasonable grounds to suspect that such information is untrue, inaccurate, not current or incomplete, Provider has the right to suspend or terminate your Account and refuse any and all current or future use of the Service (or any portion thereof).  Provider shall be entitled to monitor your username and password and, at its discretion, require you to change it. If you use a username and password that Provider considers insecure, Provider will be entitled to require this to be changed and/or terminate your Account. Provider reserves the right to remove or reclaim any usernames at any time and for any reason, including but not limited to, claims by a third party that a username violates the third party’s rights.  You agree not to register for an Account on behalf of an individual other than yourself, or register for an Account on behalf of any group or entity unless you are authorized to bind such person, group or entity to these Terms (see “Shared Accounts” below). By registering another person, group or entity you hereby represent that you are authorized to do so. 

(d) Access through Social Networking Sites.   If you access the Service through an SNS as part of the functionality of the Service, you may link your Account with Third-Party Accounts, by allowing Provider to access your Third-Party Account, as is permitted under the applicable terms and conditions that govern your use of each Third-Party Account.  You represent that you are entitled to disclose your Third-Party Account login information to Provider and/or grant Provider access to your Third-Party Account (including, but not limited to, for use for the purposes described herein) without breach by you of any of the terms and conditions that govern your use of the applicable Third-Party Account and without obligating Provider to pay any fees or making Provider subject to any usage limitations imposed by such third-party service providers.  By granting Provider access to any Third-Party Accounts, you understand that Provider may access, make available and store (if applicable) any information, data, text, software, music, sound, photographs, graphics, video, messages, tags and/or other materials accessible through the Provider internet properties that you have provided to and stored in your Third-Party Account (“SNS Content”) so that it is available on and through the Provider internet properties via your Account.  Unless otherwise specified in the Terms, all SNS Content shall be considered to be your User Content (as defined in Section 5) for all purposes of these Terms.  Depending on the Third-Party Accounts you choose and subject to the privacy settings that you have set in such Third-Party Accounts, information that you post to your Third-Party Accounts may be available on and through your Account on the Provider internet properties. Please note that if a Third-Party Account or associated service becomes unavailable or Provider’s access to such Third-Party Account is terminated by the third-party service provider, then SNS Content will no longer be available on and through the Provider internet properties.  You have the ability to disable the connection between your Account and your Third-Party Accounts at any time by accessing the “Settings” section of the Service.  PLEASE NOTE THAT YOUR RELATIONSHIP WITH THE THIRD-PARTY SERVICE PROVIDERS ASSOCIATED WITH YOUR THIRD-PARTY ACCOUNTS IS GOVERNED SOLELY BY YOUR AGREEMENT(S) WITH SUCH THIRD-PARTY SERVICE PROVIDERS, AND PROVIDER DISCLAIMS ANY LIABILITY FOR PERSONAL INFORMATION THAT MAY BE PROVIDED TO IT BY SUCH THIRD-PARTY SERVICE PROVIDERS IN VIOLATION OF THE PRIVACY SETTINGS THAT YOU HAVE SET IN SUCH THIRD-PARTY ACCOUNTS.  Provider makes no effort to review any SNS Content for any purpose, including but not limited to, for accuracy, legality or non-infringement, and Provider is not responsible for any SNS Content.

(e) Shared Accounts. A Shared Account is controlled by the member who created the account, and whose payment method has been charged (the “Account Owner”). The Account Owner may invite or authorize other third parties to share in their subscription. Any additional users joining in the Shared Account will be required to create their own separate and independent profile in order to have a distinct and personalized experience with our Service. The additional users will be able to share in the Account as long as the Account Owner retains an active subscription. When the Account Owner cancels or deletes their Account, the shared access is also terminated.

 

5. Your Content and Your License to Us

As a Registered User you may upload, post, share, reframe, transmit or otherwise make available (“Make Available”) your User Content through the Service. “User Content” means, without limitation, your Account information, resume, career history, educational history, reviews, responses, profile entries, posts, questions, career materials, testimonials, submissions, and/or any other information you provide on or through the Service or that we may create for you. When you create an Account or provide career information on or through the Service (including via forms available on the Site or by uploading a resume) you agree that you are solely responsible for the accuracy of your User Content. You agree that Provider may offer information that is of most interest to you.

You may choose to make some of your User Content public on the Service. For some of our features, other members may be able to request email notifications of your new public User Content or publish their own comments to your comments. We may use the public User Content to improve our service, make connections with potential employers, personalize site views, market services or identify or feature popular members. 

For clarity, you retain ownership of your User Content at all times. However, by posting, uploading and/or Making Available any User Content within the Service, and/or by providing any communication or material to Provider, you automatically:

(a) Grant Provider a worldwide, perpetual, irrevocable, non-exclusive, royalty-free, sublicensable through multiple tiers, and transferable, license to use, copy, reproduce, process, adapt, modify, publish, transmit, distribute, prepare derivative works of, display, and perform the User Content in connection with the Service and Provider' (and its successors' and affiliates') business, including without limitation for promoting and redistributing part or all of the Service (and derivative works thereof) in any media formats and through any media channels (now known or later developed). We may modify or adapt your User Content in order to transmit, display or distribute it over computer networks and in various media and/or make changes to your User Content as are necessary to conform and adapt that Content to any requirements or limitations within the Service, or of any networks, devices, services or media.  You also hereby grant each user of the Service a non-exclusive license to access your public User Content, and to use, reproduce, distribute, display and perform such User Content as permitted through the functionality of the Service and under these Terms. To the extent permitted by applicable law, (i) the above licenses granted by you in User Content you submit to the Service will survive even if you remove or delete your User Content from the Service and, (ii) the above licenses granted by you in forum comments, testimonials or submissions you submit are perpetual and irrevocable. Except with respect to your User Content, you agree that you have no right or title in or to any other content or Materials (see Section 11 below) that appears on or in the Service, including, but not limited to any information associated with another Account or user profile or stored on or in the Service.

(b) To the extent permitted by applicable law, waive all moral rights in the User Content which may be available to you in any part of the world and confirm that no such rights have been asserted;

(c) Appoint Provider as your agent with full power to enter into any document and/or do any act Provider may consider appropriate to confirm the grant and assignment, consent and waiver set out above;

(d) Warrant that you are the owner of the User Content and entitled to enter into these Terms and that the User Content does not infringe the proprietary or privacy rights of any third party;

(e) Confirm that no such User Content will be subject to any obligation, of confidence or otherwise, to you or any other person and that Provider shall not be liable for any use or disclosure of such User Content.

(f) Agree and understand that your User Content is subject at all times to our Acceptable Use Policy.

 

6.  Deletion or Deactivation of User Content and/or your Account.

You may request that we delete resumes and cover letters by logging into your Account and clicking on the My Settings and "Resumes" or "Letters" tabs. Your User Content can only be deleted from public view by deactivating or deleting your Account by going to your Account and clicking the My Settings and "Overview" tab. When you request that your public User Content be deleted, your resume or profiles will no longer be visible to other users within the Service, but if your User Content, including your information, was previously accessed, stored, and/or copied by others, we are unable to delete the information from their systems. When you deactivate your Account or ask that we delete your User Content we will retain logs and non-personally identifiable information about you along with an archival copy of your information, which is not accessible by you or third parties within the Service but which might be used for recordkeeping and internal legitimate business purposes. You also agree and understand that some of the content that we may create for you may not be able to be deleted once uploaded to the extent permitted by applicable law.  

You further understand that Provider may keep and use data in various ways as outlined in these Terms and in the Privacy Policy. If you request that your User Content be deleted by us, it will no longer be publicly available and to the extent permissible by law, we will take all reasonable steps to delete it. Provider has no obligation to maintain any Account you open and may delete it if you violate these Terms as determined in Provider’s sole and absolute discretion (please see also our Acceptable Use Policy).

Disclaimer. Provider does not endorse any User Content submitted to the Service by any user or other licensor, or any opinion, recommendation, or advice expressed therein, and Provider expressly disclaims any and all liability in connection with User Content. Provider does not permit copyright infringing activities and infringement of intellectual property rights on the Service, and Provider will remove User Content if properly notified that such User Content infringes on another's intellectual property rights (please refer to our Copyright and Intellectual Property Infringement Notification Section). Provider reserves the right to remove User Content without prior notice.

 

7. Our Community and Our Acceptable Use Policy

This section provides the acceptable use policy ("AUP") which defines acceptable practices relating to the use of the Service, including limitations on User Content, system abuse and security.  The Service must be used in a manner that is consistent with the intended purpose of the Service and the terms of the applicable agreement with Provider, including our Terms.  By using the Service, you consent to be bound by the terms of this AUP. If you do not agree with anything in this section, you must discontinue use of the Service. For purposes of this section, “Provider” includes all of Provider’s affiliates, including direct and indirect subsidiaries. 

(a) Summary of Generally Prohibited Conduct.  You will not use the Service to transmit, distribute or store material in a manner that: (i) violates any applicable law or regulation; (ii) may adversely affect the Service or other Users; (iii) may expose Provider to criminal or civil liability, or (iv) violate, infringe upon or otherwise misappropriate any third-party rights, including intellectual property rights, rights of publicity and privacy rights.  You are prohibited from facilitating the violation of any part of this section or applicable third-party policies, including, but not limited to transmitting, distributing, or otherwise making available any product or service that violates this section or another provider's policy.

(b) Responsible Use of the Service.  Please act responsibly when using the Service. You may only use the Service and its contents for lawful purposes and in accordance with applicable law and you are prohibited from storing, distributing or transmitting any unlawful material through the Service. You may not collect or store personal information from other users. You recognize that storing, distributing or transmitting unlawful material could expose you to criminal and/or civil liability. You agree that if a third party claims that material you have contributed to the Service is unlawful, you will bear the burden of establishing that it is lawful. You understand and agree that all materials publicly posted or privately transmitted on or through the Service are the sole responsibility of the sender, not Provider, and that you are responsible for all material you upload, publicly post or otherwise transmit to or through the Service.

(c) Content Limitations.  We require that you do not post resumes, cover letters, send e-mails or submit to or publish through forums available on the Service, or otherwise make available on the Service any content, or act in a way, which in our opinion:

Libels, defames, invades privacy, stalks, is obscene, pornographic, racist, abusive, harassing, threatening or offensive;
Disparages, criticizes, belittles, parodies or otherwise portrays in a negative light any actor appearing in the content;
Seeks to exploit or harm children by exposing them to inappropriate content, asking for personally identifiable details or otherwise;
Infringes any intellectual property or other right of any entity or person, including violating anyone's copyrights or trademarks or their rights of publicity;
Violates any law or may be considered to violate any law;
You do not have the right to transmit under any contractual or other relationship (e.g., inside information, proprietary or confidential information received in the context of an employment or a non-disclosure agreement);
Advocates or promotes illegal activity;
Impersonates or misrepresents your connection to any other entity or person or otherwise manipulates headers or identifiers to disguise the origin of the content;
Solicits funds, advertisers or sponsors;
Includes programs which contain viruses, worms and/or “Trojan horses” or any other computer code, files or programs designed to interrupt, overload, collapse, destroy or limit the functionality of any computer software or hardware or telecommunications;
Disrupts the normal flow of dialogue, causes a screen to scroll faster than other users are able to type, or otherwise act in a way which affects the ability of other people to engage in real time activities via the Service;
Copies any other pages or images on the Service except with appropriate authority;
Includes illegally sourced MP3 format files;
Amounts to a “pyramid” or similar scheme;
Amounts to “data warehousing” (i.e., using any web space made available to you as storage for large files or large amounts of data which are only linked from other sites);
Disobeys any policy or regulations established from time to time regarding use of the Service or any networks connected to the Service; or
Contains links to other sites that contain the kind of content that falls within the descriptions described above.
In addition, you are prohibited from removing any sponsorship banners or other material inserted by Provider anywhere on the Service (e.g., on any web space made available for your use).
 

PLEASE BE AWARE THAT WE COOPERATE WITH LAW ENFORCEMENT AND REPORT SUSPICIOUS ACTIVITY.

 

(d) System Abuse.  Without limitation, you agree not to:

Send, create or reply to so called "mailbombs" (i.e., emailing copies of a single message to many users, or sending large or multiple files or messages to a single user with malicious intent) or engage in "spamming" (i.e., unsolicited emailing for business or other purposes) or undertake any other activity which may adversely affect the operation or enjoyment of this Service by any other person;
Copy, display, distribute, duplicate, aggregate, redistribute, alter or modify, any of the content available within the Service, or User Content in any medium, or to any other individual or entity, other than as may be reasonably necessary to use the Service for their intended purpose;
Use any automated software or devices, such as spiders, robots or data mining techniques such as scraping, spidering, crawling or any other techniques to download, store, distribute or otherwise reproduce content within the Service and/or the Service itself;
Use or copy the Service including any data you view on and/or obtain from the Service to provide any product or service that is competitive to the Service determined in Provider's sole discretion;
Interfere with, interrupt, destroy or limit the functionality of the Service or any computer software or hardware or telecommunications equipment;
Use the Service in any manner that could damage, disable, overburden, or impair any Provider’s server, or networks connected to any Provider’s server, or interfere with any other party’s use and enjoyment of the Service;
Gain unauthorized access to the Service, other accounts, computer systems or networks connected to any Provider’s server or to the Service, through hacking, cracking, and distribution of counterfeit software, password mining or any other means;
Reverse engineer, decompile or disassemble any software accessed through the Service, including any proprietary communications protocol used by Provider;
Use information obtained from the Service to transmit any commercial, advertising or promotional materials without Provider’s written permission and except as expressly authorized by Provider, advertise or offer to sell or buy any goods or services for any purpose;
Provide any contact information which is not current and accurate, impersonate or create a false identity or falsify any information;
Use, download or otherwise copy, or provide (whether or not for a fee) to a person or entity any directory of users of the Service, or other user or usage information or any portion thereof;
Exploit, distribute or publicly communicate any error, miscue or bug which gives an unintended advantage; or
Reproduce, sell, resell or otherwise exploit any resource, or access to any resource, contained on this Service.
(e) Violation of Security Systems.  You are prohibited from using any services or facilities provided in connection with the Service to compromise its security or tamper with system resources and/or accounts. The use or distribution of tools designed for compromising security (e.g. password guessing programs, cracking tools or network probing tools) is strictly prohibited. If you become involved in any violation of system security, Provider reserves the right to release your details to system administrators at other sites or to law enforcement in order to assist them in resolving security incidents.

(f) Responsibility for Content. Provider takes no responsibility for any material created or accessible on or through the Service and will not exercise any editorial control over such material.  Provider is not obligated to monitor such material, but reserves the right to do so. 

You acknowledge that Provider has no obligation to pre-screen User Content, although Provider reserves the right in its sole discretion to pre-screen, refuse or remove any User Content.  By entering into these Terms, you hereby provide your irrevocable consent to such monitoring.  You acknowledge and agree that you have no expectation of privacy concerning the transmission of your User Content, including without limitation videos, comments, any chat, text, or voice communications that may be facilitated through the Service.  In the event that Provider pre-screens, refuses or removes any User Content, you acknowledge that Provider will do so for Provider’s benefit, not yours.  Provider may provide you with tools to flag User Content, however, Provider makes no promises or representations regarding removal of flagged User Content. 

Violations of this AUP may be reported to: legal@bold.com 

8. Additional Services, Resume Posting Services, Job Alerts.

We provide resume and curriculum vitae building services and tools. In addition, our “Resume Posting Services” may facilitate the posting of your resume or a career profile on various third-party career sites. If you sign up for our Resume Posting Services, you agree that we will use proprietary web-based information gathering tools to create a career profile for you. You further agree that the wording and interpretation of your information for purposes of Resume Posting Services will be in our sole discretion and we will not be liable for any decisions to include, not include or phrase information about you as part of the Resume Posting Services. You understand, and consent to, that prior to posting of your career profile or resume on a third-party career site, Provider will be accepting terms and conditions of use and privacy policies, and other policies that it might be prompted to accept, on these third-party career sites. You may check the third-party sites where we may post your information to see their terms and conditions of use and privacy policies (Sites found here). By using our Resume Posting Services you're accepting full and total responsibility for the actions Provider performs on your behalf and at your request as if you had performed those actions yourself. You further acknowledge and agree that you will take full responsibility and are personally liable for any consequences arising from your use of the Resume Posting Services.

Provider may also offer job posting and resume submission features as part of the Service in certain locations or jurisdictions. These features may be used only by individuals seeking employment and/or career information. In the same vein, certain Provider services may only be used by employers seeking employees.

Depending on your location or jurisdiction, Provider may provide job alerts or may use third parties and automated search engines to provide job alerts, matching employment opportunities found on third-party job searching sites with your resume or career profile, job search requests submitted by you, and/or other usage data relating to your use of the Service. Provider tries to match the information available to ensure employment opportunities presented to you in job alerts and match the type of career opportunities desired by you but Provider makes no guarantee that you will receive career opportunities or the job alert leads you desire.

 

9. Payments and Subscriptions.

If you purchase any services that Provider offers for a fee, either on a one-time or in a subscription basis, you agree that Provider’s third-party vendors may store your payment information. You also agree to pay the applicable fees for the services you order (including, without limitation, periodic fees for monthly or annual subscriptions) as they become due plus all related taxes, and to reimburse us for all collection costs and interest for any overdue amounts. 

You can sign up for automatic billing or recurring billing for some services offered on the Site. Any recurring charge will be fixed at the price agreed to at the time of purchase. The specific billing terms for the services you order will be described on the offer page on the Site. If you sign up for automatic or recurring billing, you will be notified of the billing terms and how to stop recurring billing. By signing up for Provider services with recurring billing, you will be deemed to agree to those billing terms as described specifically on the Site. 

Provider offers certain premium services such as Resume Review, Resume Writing, Premium Career Report and Cover Letter Writing, which are not included in the cost of Provider’s basic subscription services. Failure to pay for these premium services, if purchased, may result in the termination of your subscription. 

Depending on where you transact with us, the type of payment method used and where your payment method was issued, your transaction may be subject to foreign exchange fees or differences in prices, because of exchange rates. Your transaction may also be subject to foreign currency exchange fees assessed by your bank or card issuer. Provider is not responsible for any foreign currency exchange fees or surcharges and will not make any compensation or reimbursement for charges imposed by your bank or card issuer. Provider does not support all payment methods, currencies or locations for payment. If the payment method you use with us, such as a credit card, reaches its expiration date and you do not edit your payment method information or cancel your Account or the applicable service, you authorize us to continue billing that payment method and you remain responsible for any uncollected amounts. Your obligation to pay fees continues through the end of the subscription period until you cancel your subscription. All applicable taxes are calculated based on the billing information you provide us at the time of purchase. 

Provider has the discretion to alter prices for services at any time, subject to the notification terms of Section 3 (Modifications).

 

10. Cancellations.

You may cancel your subscription anytime by contacting our customer service department or by going to the online cancel page under My Accounts and My Settings. Provider will send an email with a cancellation number to confirm any cancellation request. If you do not receive this confirmation and still wish to cancel, please contact our customer service department directly for further assistance. Provider may issue a refund if notice of cancellation of your subscription is provided before the end of the trial period, if a trial period is offered. Provider does not guarantee refunds after trials are expired. 

You acknowledge that any services that you purchase are subject to these Terms and any additional terms related to the provision of any product or service. Note that employers’ payment terms and subscriptions are governed by Provider Employer Additional Terms.

We do our best to describe every product or service offered on the Service as accurately as possible. However, we are human, and therefore we do not warrant that product specifications, pricing, or other content on the online services is complete, accurate, reliable, current, or error-free. In the event of any errors relating to the pricing or specifications, Provider shall have the right to refuse or cancel any orders in its sole discretion. Additional terms may apply.

 

11.  Our Intellectual Property, Trademarks and Copyrights.

Except with respect to your User Content and other Registered Users’ Content, you agree that, as between you and us, Provider (and our affiliated companies and suppliers) own all rights, title and interest in the Service and all tools, and all related intellectual property rights.  The Service as a whole is copyrighted as a collective work, and individual works or content appearing on or accessible through the Site owned by or licensed to Provider or its content providers are likewise subject to copyright protection domestically and internationally.  Likewise, all data files, program files, software, code, proprietary methods, systems and other materials that are made available to download from or used to provide the Service ("Materials") may not be copied, modified, reproduced, republished, posted, transmitted, sold, offered for sale, or redistributed in any way without our prior written permission and the prior written permission of our applicable licensors. The Materials are protected by copyrights, patents, trade secrets or other proprietary rights. 

You must abide by all copyright notices, information, or restrictions contained in or attached to any of our Materials.  Nothing in this Agreement grants you any right to receive delivery of a copy of our Materials or to obtain access to our Materials except as generally and ordinarily permitted through the Service according to these Terms.  Certain names, logos, distinctive features, source identifiers and other materials displayed on the Site or in the Services, including its “look and feel”, constitute trademarks, tradenames, service marks, trade dress or logos ("Trademarks") of us or other entities. All Trademarks not owned by Provider that appear on this site are the property of their respective owners.  You are not authorized to use any such Trademarks.  Ownership of all such Trademarks and the goodwill associated therewith remains with us or those other entities. Unless you first obtain the copyright owner’s prior written consent, you may not copy, distribute, publicly perform, publicly display, digitally perform (in the case of sound recordings), or create derivative works from any copyrighted work made available or accessible via the Service. You will not remove, alter or obscure any copyright, trademark, service mark or other proprietary rights notices incorporated in or accompanying the Service.

 

12. Your Use of Materials.

Your right to make use of the Service and any Material or other content appearing on it is subject to your compliance with these Terms. Modification or use of the Material or any other content on the Service for any purpose not permitted by these Terms may be a violation of our intellectual property rights (see Section 11 above) as protected by law and these Terms and is prohibited.

You may copy, access, download and display Materials and all other content displayed on the Service for non-commercial, personal or entertainment use on a single computer only. The Materials and all other content on the Service may not otherwise be copied, reproduced, republished, uploaded, displayed, posted, transmitted, distributed, licensed or used in any way unless specifically authorized by Provider. Any authorization to copy or download Material granted by Provider in any part of the Service for any reason is restricted to making a single copy for non-commercial, personal, entertainment use on a single computer only, and is subject to your keeping intact all copyright and other proprietary notices. Using any Material on any other website or networked computer environment is prohibited. Also, decompiling, reverse engineering, disassembling, or otherwise reducing the code used in any software on the Service into a readable form in order to examine the construction of such software and/or to copy or create other products based (in whole or in part) on such software, is prohibited (please refer to our Acceptable Use Policy for more information).

 

13. Public Discourse and Forums.

The Service may include various bulletin boards, chat rooms, community pages, comments or chat features, or other forums (“Forums”) where you can post User Content, including, but not limited to, your observations and comments on designated topics and on others’ User Content.  Provider cannot guarantee that other Users will not use the ideas and information that you share. Therefore, if you have an idea or information that you would like to keep confidential and/or do not want others to use, do not post it publicly on the Service. When you disclose information or rely on any information in the Forums, you do so at your own risk. Provider reserves the right to, but has no obligation to, monitor the Forums, or any postings or other materials that you or other users transmit or post on the Forums, to alter or remove any such materials, and to disclose such materials and the circumstances surrounding their transmission to any third party in order to operate the Service properly or to comply with legal obligations or governmental requests.  Furthermore, you acknowledge that a large volume of information is available in these Forums and that people participating in such Forums may occasionally post message or make statements, whether intentionally or unintentionally, that are inaccurate, misleading, deceptive, abusive or even unlawful.  Provider neither endorses nor is responsible for such messages or statements, or for any opinion, advice, information or other utterance made or displayed in the Forums by you or the other users.  The opinions expressed in the Forums reflect solely the opinions of you and/or the other users and may not reflect the opinions of Provider. Provider is not responsible for any errors or omissions in postings, for hyperlinks embedded in messages or for any results obtained from the use of the information contained in the Forums. Under no circumstances will Provider be liable for any loss or damage caused by your reliance on the information in the Forums or posted User Content or your use of the Forums or User Content. ANY USE OF THE FORUMS WILL BE AT YOUR OWN RISK AND WILL BE SUBJECT TO THE DISCLAIMERS AND LIMITATIONS ON LIABILITY SET OUT IN THESE TERMS.

 

14. Invited Submissions.

From time to time, areas on the Site may expressly request submissions of ideas or improvements through promotions, surveys or otherwise (“Invited Submissions”'). Sometimes Provider may incentivize users to participate in Invited Submissions.  Where this is the case, please carefully read any Additional Terms that govern those submissions, as they will affect your legal rights. If no Additional Terms govern those submissions, then these Terms will apply in full to any Invited Submissions you make. IN ANY EVENT, ANY MATERIAL YOU SEND TO US WILL NOT BE TREATED AS CONFIDENTIAL. Regardless of any industry custom or practice, we will not pay you for the use of any content or submissions that you submit to the Site. Provider may use such content and submissions as user testimonials. 

 

15. Disclaimer Regarding Testimonials

The Service may contain testimonials and opinions (“Testimonials”) by users of our services. These testimonials reflect the real-life experiences and opinions of such users. However, the experiences are personal to those particular users, and may not necessarily be representative of all users of our services.  We do not claim, and you should not assume, that all users will have the same experiences. YOUR INDIVIDUAL RESULTS MAY VARY.

The testimonials on the Service are submitted in various forms such as text, audio and/or video, and are reviewed by us before being posted. They appear on the Service as given by the users, except for the correction of grammar or typing errors. Some testimonials may have been shortened for the sake of brevity where the full testimonial contained extraneous information not relevant to the general public. Photos added next to testimonials may not always represent the person giving the testimonial. The views and opinions contained in the testimonials belong solely to the individual user and do not reflect our views and opinions. We are not affiliated with users who provide testimonials, and users are not paid in cash or compensated for their testimonials unless the testimonial is part of an incentivized Invited Submission.

 

16. Copyright and Infringement Notification Policy

We respect the intellectual property rights of others and encourage you to do the same. Accordingly, we have a policy of removing content that violates the intellectual property rights of others, suspending access to the Service (or any portion thereof) to any user who uses the Service in violation of someone else’s intellectual property rights, and/or terminating in appropriate circumstances the Account of any user who uses the Service in violation of someone else’s intellectual property rights. 

a) Submitting a Notification for Removing Infringing Content.  We have implemented procedures for receiving written notification of claimed copyright infringement and for processing such claims in accordance with applicable law (including 17 U.S.C. § 512 Digital Millennium Copyright Act (“DMCA”)). If you believe your copyright or other intellectual property right is being infringed by a user of this Site, please provide written notice to our agent for notice of claims of infringement at either:

Attn: BOLD LLC, DMCA Designated Agent,

City View Plaza II, Ste 6000

48 Road 165

Guaynabo, Puerto Rico 00968,

 

or at,

 

Email: legal@bold.com . 

 

To be sure the matter is handled immediately, your written notice must: 

Contain your physical or electronic signature;
Identify the copyrighted work or other intellectual property alleged to have been infringed;
Identify the allegedly infringing material in a sufficiently precise manner to allow us to locate that material;
Contain adequate information by which we can contact you (including postal address, telephone number, and e-mail address);
Contain a statement that you have a good faith belief that use of the copyrighted material or other intellectual property is not authorized by the owner, the owner's agent or the law;
Contain a statement that the information in the written notice is accurate; and
Contain statement, under penalty of perjury, that you are authorized to act on behalf of the copyright or other intellectual property right owner. 
Unless the notice pertains to copyright or other intellectual property infringement, the agent will be unable to address the listed concern.

b) Submitting a Counter-Notification.  We will notify you that we have removed or disabled access to copyright-protected material that you provided if such removal is pursuant to a validly received DMCA take-down notice. In response, if you believe the material was removed or disabled by mistake or because of a misidentification of the material, you may provide our agent with a written counter-notification that includes the following information:

1.  Your physical or electronic signature;

2.  Identification of the material that has been removed or to which access has been disabled, and the location at which the material appeared before it was removed or access to it was disabled;

3.  A statement from you under the penalty of perjury, that you have a good faith belief that the material was removed or disabled as a result of a mistake or misidentification of the material to be removed or disabled; and

4.  Your name, physical address and telephone number, and a statement that you consent to the jurisdiction of a court for the judicial district in which your physical address is located, or if your physical address is outside of the United States of America, for any judicial district in which we may be located, and that you will accept service of process from the person who provided notification of allegedly infringing material or an agent of such person.

c) Termination of Repeat Infringers.  We reserve the right, in our sole discretion, to terminate the account or access of any user of this Site or Service who is the subject of repeated DMCA or other infringement notifications.  

Provider seeks to preserve any and all exemptions from liability that may be available under the copyright law, but does not necessarily stipulate that it is a service provider as defined in USC section 512(c) or elsewhere.

 

17. User Interactions and Release.

You are solely responsible for your interactions with other users of the Service and any other parties with whom you interact through the Service. If you have a dispute with one or more users (including merchants), you hereby release the Provider Group (defined in Section 18) from any claims, demands, liabilities, costs or expenses and damages (actual and consequential of every kind and nature, known and unknown, arising out of or in any way connected with such disputes. In entering into this release, you expressly waive any protections (whether statutory or otherwise) to the extent permitted by applicable law, that would otherwise limit the coverage of this release to include only those claims which you may know or suspect to exist in your favor at the time of agreeing to this release. If you are a California resident, you waive California Civil Code §1542, which says:  “A GENERAL RELEASE DOES NOT EXTEND TO CLAIMS WHICH THE CREDITOR DOES NOT KNOW OR SUSPECT TO EXIST IN HIS OR HER FAVOR AT THE TIME OF EXECUTING THE RELEASE, WHICH IF KNOWN BY HIM OR HER MUST HAVE MATERIALLY AFFECTED HIS SETTLEMENT WITH THE DEBTOR.”

 

18.  Disclaimer of Warranties.

YOUR USE OF THE SERVICE IS AT YOUR OWN RISK. THE SERVICE AND ALL THE MATERIALS, INFORMATION, SOFTWARE, AND OTHER CONTENT IN THE SERVICE ARE PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, AND TO THE FULLEST EXTENT PERMISSIBLE PURSUANT TO APPLICABLE LAW, PROVIDER AND ANY SUBSIDIARIES OR AFFILIATED COMPANIES OF THE PROVIDER (“PROVIDER GROUP”) DISCLAIM ALL WARRANTIES AND CONDITIONS, EXPRESS IMPLIED OR COLLATERAL, RELATED TO THE SERVICE, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. THE PROVIDER GROUP DOES NOT WARRANT THAT THE FUNCTIONS CONTAINED IN THE SERVICE WILL BE AVAILABLE, UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE SERVICE OR THE SERVERS THAT MAKE THE SERVICE AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. THE PROVIDER GROUP DOES NOT WARRANT OR MAKE ANY REPRESENTATIONS OR CONDITIONS REGARDING THE USE OR THE RESULTS OF THE USE OF THE MATERIAL, INFORMATION, SOFTWARE, FACILITIES, SERVICES OR OTHER CONTENT ON THE SERVICE OR ANY WEB SERVICES LINKED TO THE SERVICE IN TERMS OF THEIR CORRECTNESS, ACCURACY, RELIABILITY, OR OTHERWISE. THE PROVIDER GROUP MAKES NO WARRANTIES OR CONDITIONS THAT YOUR USE OF SERVICE, OR THE MATERIALS, INFORMATION, SOFTWARE, FACILITIES, OR OTHER CONTENT IN THE SERVICE OR ANY WEB SERVICE WILL NOT INFRINGE THE RIGHTS OF OTHERS AND THE PROVIDER GROUP ASSUMES NO LIABILITY OR RESPONSIBILITY FOR ERRORS OR OMISSIONS IN SUCH MATERIALS, INFORMATION, SOFTWARE, FACILITIES, OR OTHER CONTENT OF THE SERVICE OR ANY OTHER WEB SERVICE. 

IF APPLICABLE LAW DOES NOT ALLOW THE EXCLUSION OF SOME OR ALL OF THE ABOVE IMPLIED WARRANTIES AND CONDITIONS, THE ABOVE EXCLUSIONS WILL APPLY TO YOU ONLY TO THE EXTENT PERMITTED BY APPLICABLE LAW.

IF YOU ARE ACCESSING THE SERVICE FROM THE EUROPEAN UNION OR OTHER JURISDICTIONS THAT TO DO NOT RECOGNIZE DISCLAIMERS OF CERTAIN WARRANTIES, NOTHING IN THIS AGREEMENT SHALL EXCLUDE OR LIMIT LIABILITY FOR DEATH OR PERSONAL INJURY RESULTING FROM THE NEGLIGENCE OF EITHER PARTY OR THEIR SERVANTS, AGENTS OR EMPLOYEES.

 

19. Limitation of Liability.

THE PROVIDER GROUP DISCLAIMS ALL LIABILITY WHETHER BASED IN CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY OR OTHERWISE, AND DOES NOT ACCEPT ANY LIABILITY FOR ANY LOSS OR DAMAGE (DIRECT, INDIRECT, PUNITIVE, ACTUAL, CONSEQUENTIAL, INCIDENTAL, SPECIAL, EXEMPLARY OR OTHERWISE) RESULTING FROM ANY USE OR MISUSE OF, OR INABILITY TO USE, THE SITE OR ANY OTHER WEB SITE, OR THE MATERIAL, INFORMATION, SOFTWARE, FACILITIES, SERVICES OR OTHER CONTENT ON THE SITE OR ANY OTHER WEB SITE, REGARDLESS OF THE BASIS UPON WHICH LIABILITY IS CLAIMED AND EVEN IF ANY MEMBER OF THE PROVIDER GROUP HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH LOSS OR DAMAGE. WITHOUT LIMITATION, YOU (AND NOT ANY MEMBER OF THE PROVIDER GROUP) ASSUME THE ENTIRE COST OF ALL NECESSARY SERVICING, REPAIR OR CORRECTION IN THE EVENT OF ANY SUCH LOSS OR DAMAGE ARISING. 

IF APPLICABLE LAW DOES NOT ALLOW ALL OR ANY PART OF THE ABOVE LIMITATION OF LIABILITY TO APPLY TO YOU, THE LIMITATIONS WILL APPLY TO YOU ONLY TO THE EXTENT PERMITTED BY APPLICABLE LAW.

 

20. Indemnity.

To the extent permitted by applicable law in your jurisdiction, you agree to indemnify and hold harmless Provider and its officers, directors, employees, agents, distributors and affiliates from and against any and all claims, demands, liabilities, costs or expenses, including reasonable legal fees, resulting from your breach of these Terms, including any of the foregoing provisions, representations, warranties or conditions, and/or from your placement or transmission of any content onto Provider’s servers, and/or from any and all use of your Account.

 

21. Investigations.

Provider reserves the right to investigate suspected violations of these Terms, including without limitation any violation arising from any submission, posting or e-mails you make or send to any Forum. Provider may seek to gather information from the user who is suspected of violating these Terms, and from any other user. Provider may suspend any users whose conduct or postings are under investigation and may remove such material from its servers as it deems appropriate and without notice. If Provider believes, in its sole discretion, that a violation of these Terms has occurred, it may take any corrective action it deems appropriate, as permitted by applicable law. Provider will fully cooperate with any law enforcement authorities or court order requesting or directing Provider to disclose the identity of anyone posting any e-mails, or publishing or otherwise making available any materials that are believed to violate these Terms. BY ACCEPTING THIS AGREEMENT YOU WAIVE AND HOLD HARMLESS ALL MEMBERS OF THE PROVIDER GROUP FROM ANY CLAIMS RESULTING FROM ANY ACTION TAKEN BY ANY MEMBER OF THE PROVIDER GROUP DURING OR AS A RESULT OF ITS INVESTIGATIONS AND/OR FROM ANY ACTIONS TAKEN AS A CONSEQUNCE OF INVESTIGATIONS BY EITHER A MEMBER OF THE PROVIDER GROUP OR LAW ENFORCEMENT AUTHORITIES.

 

22. Third-Party Sites.

The Service may link you to other sites on the Internet that may not be affiliated with Provider. These sites may contain information about job opportunities, employers, job candidates or material that some people may find inappropriate or offensive. These other sites are not under the control of Provider, and you acknowledge that (whether or not such sites are affiliated in any way with Provider), Provider is not responsible for the accuracy of job postings, employer descriptions, candidate resumes, legality, decency, or any other aspect of the content of such sites. The inclusion of such a link does not imply endorsement of any site by Provider or any association with its operators. If you elect to use such third-party sites, and/or if you elect to ‘click’ on a link or button, you understand that (a) you will be leaving our Site and (b) your use of any such third-party sites will be subject to any terms and conditions and privacy policies required by the applicable third-party provider(s).  Provider does not make any representations or warranties as to the security of any information (including, without limitation, credit card and other personal information) you might be requested to give any third party, and you irrevocably waive any claim against us with respect to such sites. We strongly encourage you to use caution before providing any sensitive information (e.g., social security numbers or financial information) to any third party and to make whatever investigation you feel necessary or appropriate before proceeding with any communications with any of these third parties.

 

23. Governing Law.

To the fullest extent permitted by the applicable jurisdiction, these Terms shall be governed by, construed and enforced in accordance with the laws applicable to the merchant outlet location that processed your payment. Therefore, for transactions processed by BOLD LLC, the laws of the State of New York, United States of America, shall apply. If your transaction was processed by Auxiliant S.à.r.l, the laws of Luxembourg shall apply.

Notwithstanding the foregoing, If you are a U.S. resident, except as otherwise provided in this section or as otherwise required by law, these Terms involve transactions between the parties in interstate commerce and shall be governed by the Federal Arbitration Act, 9 USC § 1-19 of the United States of America. Judgment upon any interim or final award shall be entered and confirmed in any court or tribunal of competent jurisdiction. The substantive law of the State of New York (excluding its conflicts of law provisions) shall apply to all disputes and these Terms. If there is a difference between the Federal Arbitration Act and New York law, the Federal Arbitration Act controls. In any circumstances where the foregoing Terms permit the parties to litigate in court, the parties hereby agree to submit to the personal jurisdiction of the courts located within New York, New York for such purpose.

These Terms will not be governed by the United Nations Convention on Contracts for the International Sale of Goods.

 

24.  Arbitration.

Please read this carefully if you are a resident of the United States of America.  It affects your rights. Depending on your place of residence, these Terms may not apply to you.  \

(a) US Residents: To the fullest extent permissible by law, with the exception of disputes pertaining to Provider’s intellectual property rights and certain statutory claims that, pursuant to law, are not arbitrable, any dispute of any kind between you and Provider arising under these Terms shall be resolved through binding arbitration pursuant to the JAMS Streamlined Arbitration Rules and Procedures on an individual basis with no class relief. The arbitrator shall be a retired judge or justice of any New York state or federal court with substantial experience in the internet industry and shall follow New York substantive law in adjudicating the dispute, except that this Section 24 shall be construed as a “written agreement to arbitrate” pursuant to the Federal Arbitration Act (“FAA”). You and we agree that we intend that this Section 24 satisfies the “writing” requirement of the FAA. The hearing shall be conducted in the county that encompasses the billing address you have provided to Provider. For any claim in which you seek U.S. $10,000.00 or less, you shall have the choice as to whether the hearing is conducted in person, by telephone, or instead the arbitrator decides the dispute without a hearing. For those claims that the arbitrator determines are not frivolous, Provider shall pay the costs and fees of JAMS and the arbitrator. Provider agrees that it will not seek reimbursement from You for its costs and fees incurred by it in the arbitration. AGREEMENT TO THESE TERMS CONSTITUTES AN AGREEMENT TO PURSUE YOUR CLAIM ON AN INDIVIDUAL BASIS AND A WAIVER OF THE ABILITY TO PURSUE YOUR CLAIM IN A CLASS ACTION.

(b) Non-Us Residents: If any controversy, allegation, or claim (including any non-contractual claim) arises out of or relates to the Site or these Terms, then you and we agree to send a written notice to the other providing a reasonable description of this Section 24(b) dispute, along with a proposed resolution of it. Our notice to you will be sent to you based on the most recent contact information that you provide us. If no such information exists or if such information is not current, then, we have no obligation under this section. Your notice must be sent to us at boldforeigndispute@bold.com. For a period of sixty (60) days from the date of receipt of notice from the other party, Provider and you will engage in a dialogue in order to attempt to resolve the dispute, though nothing will require either you or Provider to resolve the Section 24(b) dispute on terms either you or Provider, in each of our sole discretion, are uncomfortable. Nothing in this Section will prevent a party from pursuing their claims in Court or another complaint process.

 

25. Local Regulations.

Provider makes no representation that Materials or other content on the Service are appropriate or available for use outside of the United States of America (“United States”), and if accessing the Service from outside the United States, then Provider makes no representation that Materials or other content on the Site are appropriate or available for use from your current location. Provider may have certain localized websites available to you in the United Kingdom, Canada, France, Belgium, Switzerland, Italy, Germany, Australia, New Zealand, the Netherlands, Poland and Spain, and their territories, possessions and protectorates, but makes no representation as to availability and appropriateness of the Service in such jurisdictions. If you choose to access the Service from other locations outside the United States, you do so on your own initiative and at your own risk.

You are responsible for complying with local laws, if and to the extent local laws are applicable. 

 

26. Electronic Communications.  

The communications between you and Provider may be made through electronic means, whether you visit the Service or send Provider emails, or whether Provider posts notices on the Service or communicates with you via email. For contractual purposes, you (1) consent to receive communications from Provider in an electronic form; and (2) agree that all terms and conditions, agreements, notices, disclosures, and other communications that Provider provides to you electronically satisfy any legal requirement that such communications would satisfy if it were to be in writing.  The foregoing does not affect your statutory rights.

 

27.  California Residents Notice

Under California Civil Code Section 1789.3, California residents are entitled to the following consumer rights notice: The Service is provided BOLD LLC.  If you have a question or complaint regarding the Service, please contact Customer Service at support@bold.com. You may also contact us by writing us at BOLD LLC, City View Plaza II, 48 Road 165 Suite 6000, Guaynabo, PR 00968, USA. California residents may reach the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs by post at 1625 North Market Blvd., Suite N 112, Sacramento, CA 95834 or by telephone at (916) 445-1254 or (800) 952-5210 or Hearing Impaired at TDD (800) 326-2297 or TDD (916) 322-1700.  Email: dca@dca.ca.gov.

 

28. General.

If any provision of these Terms shall be unlawful, void, or for any reason unenforceable, then that provision shall be deemed severable from this agreement and shall not affect the validity and enforceability of any remaining provisions. This is the entire agreement between you and Provider relating to the matters contained here and the Site. 

 

29. Contact Us.

The Site is controlled and operated by Provider. Whether you access the services through any of our internet properties or family Sites you may contact Provider using the information provided herein. Please forward any comments or complaints about the Site to support@bold.com or write to BOLD LLC, City View Plaza II, Suite 6000, Guaynabo, PR 00968, United States of America or to Auxiliant S.à.r.l, 1A, rue Thomas Edison, L-445 Strassen, Luxembourg.
<br/> <br/> <br/> <br/> <br/> <br/>
            </div>

            <Footer/>
        </div>
    );
}

export default TermsOfService;
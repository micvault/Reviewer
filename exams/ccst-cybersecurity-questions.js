window.CCST_CYBERSECURITY_QUESTIONS = [
  {
    "number": 1,
    "chapter": 1,
    "chapterName": "Network defense and wireless security",
    "type": "mcq",
    "question": "Which of the following services or protocols can be used to ensure the security and compliance of an \norganization's network?",
    "options": {
      "A": "NTP (Network Time Protocol)",
      "B": "SNMP (Simple Network Management Protocol)",
      "C": "DHCP (Dynamic Host Configuration Protocol)",
      "D": "DNS (Domain Name System)"
    },
    "answer": "B",
    "explanation": "SNMP supports monitoring and managing network devices. SNMPv3 can authenticate and encrypt management exchanges. NTP, DHCP, and DNS also support secure operations; none of these protocols alone ensures security or regulatory compliance. B is the best management-focused choice, but the question is broad."
  },
  {
    "number": 2,
    "chapter": 1,
    "chapterName": "Network defense and wireless security",
    "type": "mcq",
    "question": "Which network security feature helps protect against unauthorized data access and ensures \nconfidentiality of sensitive information?",
    "options": {
      "A": "Firewall",
      "B": "VPN",
      "C": "Intrusion Detection System",
      "D": "Antivirus"
    },
    "answer": "B",
    "explanation": "An encrypted VPN protects the confidentiality of traffic crossing an untrusted network. A firewall also limits unauthorized access, so the wording overlaps access control and confidentiality. VPN is the strongest fit when the intended protection is encrypted communication."
  },
  {
    "number": 3,
    "chapter": 1,
    "chapterName": "Network defense and wireless security",
    "type": "mcq",
    "question": "What is the purpose of a firewall in a network security system?",
    "options": {
      "A": "To prevent unauthorized access to or from private networks",
      "B": "To scan and filter network traffic for potential threats",
      "C": "To encrypt data transmitted over the network",
      "D": "To provide secure remote access to the network"
    },
    "answer": "A",
    "explanation": "A firewall prevents unauthorized network access by enforcing traffic rules. B can also describe traffic inspection in a modern firewall, so the alternatives overlap. A states the general purpose most directly; firewalls do not inherently encrypt all traffic or provide remote access."
  },
  {
    "number": 4,
    "chapter": 1,
    "chapterName": "Network defense and wireless security",
    "type": "mcq",
    "question": "Which of the following is a characteristic of a network-based firewall?",
    "options": {
      "A": "Inspects and filters traffic at the application layer",
      "B": "Operates at the data link layer",
      "C": "Provides protection against external threats only",
      "D": "Requires software installed on client devices"
    },
    "answer": "A",
    "explanation": "Application-aware network firewalls can inspect and filter application-layer traffic, making A the best listed choice. Basic packet-filtering firewalls need not do this. C is incorrect because network firewalls can also protect internal segments; D describes endpoint deployment rather than a network appliance."
  },
  {
    "number": 5,
    "chapter": 1,
    "chapterName": "Network defense and wireless security",
    "type": "mcq",
    "question": "Which of the following features of the Cisco Identity Services Engine (ISE) allows network \nadministrators to define policies for controlling access to network resources based on user identities and \nuser or group attributes?",
    "options": {
      "A": "Network Access Profiles",
      "B": "Identity Firewall",
      "C": "Profiling",
      "D": "TrustSec"
    },
    "answer": "D",
    "explanation": "TrustSec uses identity-derived security groups and tags to enforce group-based access policies, making D the closest listed technology. The precise ISE mechanism described is authorization policies and authorization profiles, which are not accurately named among the choices. Profiling classifies endpoints and is not itself the authorization mechanism."
  },
  {
    "number": 6,
    "chapter": 1,
    "chapterName": "Network defense and wireless security",
    "type": "mcq",
    "question": "Which security feature provides network segmentation by creating virtual networks?",
    "options": {
      "A": "VLANs",
      "B": "Intrusion Prevention System (IPS)",
      "C": "Virtual Private Network (VPN)"
    },
    "answer": "A",
    "explanation": "VLANs create separate Layer 2 broadcast domains on shared switching infrastructure, providing network segmentation. Restricting communication between VLANs also requires routing policy, ACLs, or firewalls."
  },
  {
    "number": 7,
    "chapter": 1,
    "chapterName": "Network defense and wireless security",
    "type": "mcq",
    "question": "Which of the following is a network security device that operates at the session layer of the OSI \nmodel?",
    "options": {
      "A": "Firewall",
      "B": "Intrusion Detection System (IDS)",
      "C": "Intrusion Prevention System (IPS)",
      "D": "SSL/TLS"
    },
    "answer": "A",
    "explanation": "A circuit-level gateway is a type of firewall commonly associated with session establishment in introductory OSI discussions. IDS and IPS are not exclusively session-layer devices, and SSL/TLS is not a device. Because the options omit circuit-level gateway, A is conditional rather than a universal description of every firewall."
  },
  {
    "number": 8,
    "chapter": 1,
    "chapterName": "Network defense and wireless security",
    "type": "mcq",
    "question": "Which of the following is true regarding secure web gateways (SWG)?",
    "options": {
      "A": "SWGs provide protection against malware and advanced threats",
      "B": "SWGs are primarily used to secure internal web applications.",
      "C": "SWGs are no longer necessary with the advent of cloud-based applications.",
      "D": "SWGs can only be deployed on-premises"
    },
    "answer": "A",
    "explanation": "A secure web gateway applies policy to users' outbound web access and can inspect downloads or block malicious destinations. It differs from a web application firewall protecting an organization's hosted application and may be cloud delivered."
  },
  {
    "number": 9,
    "chapter": 1,
    "chapterName": "Network defense and wireless security",
    "type": "mcq",
    "question": "Which of the following protocols can be used to securely transfer files over a network?",
    "options": {
      "A": "HTTP",
      "B": "FTP",
      "C": "SMTP",
      "D": "DNS",
      "E": "None of the above (No secure file transfer protocol is listed)"
    },
    "answer": "E",
    "explanation": "Ordinary HTTP and FTP do not encrypt transferred files by default. SMTP transports email and DNS resolves names; neither supplies the secure file-transfer function requested. FTP must not be confused with FTPS. Suitable examples would be SFTP, SCP, HTTPS, or properly configured FTPS, but none is listed."
  },
  {
    "number": 10,
    "chapter": 1,
    "chapterName": "Network defense and wireless security",
    "type": "mcq",
    "question": "Which of the following describes the purpose of a VPN (Virtual Private Network)?",
    "options": {
      "A": "To improve network performance and reduce latency",
      "B": "To segment a network into multiple smaller networks",
      "C": "To provide secure remote access to a private network over the internet",
      "D": "To control and filter network traffic based on predefined policies"
    },
    "answer": "C",
    "explanation": "A remote-access VPN securely connects an authorized remote user to private resources over an untrusted network. It does not guarantee lower latency and is distinct from creating VLANs or ordinary firewall filtering."
  },
  {
    "number": 11,
    "chapter": 1,
    "chapterName": "Network defense and wireless security",
    "type": "mcq",
    "question": "What is the primary purpose of a VPN (Virtual Private Network)?",
    "options": {
      "A": "To encrypt email communications",
      "B": "To secure wireless network connections",
      "C": "To establish a secure remote connection over a public network",
      "D": "To protect against malware attacks"
    },
    "answer": "C",
    "explanation": "A secure VPN creates a protected connection across a public network for remote access or site-to-site communication. It does not automatically secure every endpoint or remove malware already present."
  },
  {
    "number": 12,
    "chapter": 1,
    "chapterName": "Network defense and wireless security",
    "type": "mcq",
    "question": "What is the purpose of implementing a firewall in a network?",
    "options": {
      "A": "To scan and remove malware from network traffic",
      "B": "To prevent unauthorized physical access to network devices",
      "C": "To control and filter network traffic based on predetermined security policies",
      "D": "To monitor network performance and troubleshoot issues"
    },
    "answer": "C",
    "explanation": "A firewall implements traffic-control rules, such as permitting a required service and denying other connections. It is not a guarantee that all malware will be removed or that physical equipment cannot be accessed."
  },
  {
    "number": 13,
    "chapter": 1,
    "chapterName": "Network defense and wireless security",
    "type": "mcq",
    "question": "Which of the following is a common authentication protocol used in wireless networks?",
    "options": {
      "A": "FTP",
      "B": "WPA",
      "C": "SSH",
      "D": "SMTP"
    },
    "answer": "B",
    "explanation": "WPA is the wireless-security choice among these options. It is a security suite rather than a single authentication protocol; enterprise Wi-Fi commonly uses 802.1X and EAP. FTP, SSH, and SMTP are not the wireless- security family requested."
  },
  {
    "number": 14,
    "chapter": 1,
    "chapterName": "Network defense and wireless security",
    "type": "mcq",
    "question": "Which encryption method provides the highest level of security for a wireless SoHo network?",
    "options": {
      "A": "WPA2",
      "B": "WEP",
      "C": "WPA",
      "D": "TKIP"
    },
    "answer": "A",
    "explanation": "WPA2 configured with AES-CCMP is the strongest listed choice. WEP and WPA/TKIP are obsolete. WPA3 should be preferred when supported, but it is not included among these options."
  },
  {
    "number": 15,
    "chapter": 1,
    "chapterName": "Network defense and wireless security",
    "type": "mcq",
    "question": "Which of the following features help to secure a wireless SoHo network from unauthorized access?",
    "options": {
      "A": "Default admin credentials",
      "B": "Weak encryption",
      "C": "MAC filtering",
      "D": "SSID broadcast"
    },
    "answer": "C",
    "explanation": "MAC filtering is the only listed feature that attempts to restrict which device addresses may connect. It is weak because MAC addresses can be spoofed. Default credentials, weak encryption, and SSID broadcast do not provide strong access protection. Use WPA2-AES or WPA3 and strong credentials in practice."
  },
  {
    "number": 16,
    "chapter": 1,
    "chapterName": "Network defense and wireless security",
    "type": "mcq",
    "question": "Which technology is responsible for monitoring network traffic and identifying potential threats?",
    "options": {
      "A": "IDS",
      "B": "Firewall",
      "C": "Server",
      "D": "IPS"
    },
    "answer": "A",
    "explanation": "An IDS monitors activity and produces alerts when it detects suspicious patterns. An IPS is commonly deployed inline to block traffic as well. Detection is not proof that every attack will be found."
  },
  {
    "number": 17,
    "chapter": 1,
    "chapterName": "Network defense and wireless security",
    "type": "multichoice",
    "question": "Which protocol uses encryption for secure remote access to network resources?",
    "options": {
      "A": "Point-to-Point Protocol (PPP)",
      "B": "Wireless Equivalent Privacy (WEP)",
      "C": "Internet Protocol Security (IPSec)",
      "D": "Secure Shell (SSH)"
    },
    "answer": [
      "C",
      "D"
    ],
    "explanation": "IPsec protects IP traffic and is widely used in VPNs; SSH encrypts remote administration sessions and supports secure transfers. Both can satisfy this broad question. SSH would be the unique choice only if the question specified remote command-line administration."
  },
  {
    "number": 18,
    "chapter": 1,
    "chapterName": "Network defense and wireless security",
    "type": "mcq",
    "question": "What is the purpose of using an application firewall in a cybersecurity setup?",
    "options": {
      "A": "To encrypt network traffic between applications",
      "B": "To perform vulnerability scanning of applications",
      "C": "To increase the speed and performance of applications",
      "D": "To block malicious incoming requests and attacks aimed at the application"
    },
    "answer": "D",
    "explanation": "A web application firewall inspects HTTP application traffic and can block patterns associated with application attacks. It complements secure development, patching, and monitoring rather than replacing them."
  },
  {
    "number": 19,
    "chapter": 1,
    "chapterName": "Network defense and wireless security",
    "type": "multichoice",
    "question": "You are planning to work from home. Your company requires that you connect to the company \nnetwork through a VPN Which three critical functions do VPNs provide to remote workers? (Choose 3)",
    "options": {
      "A": "Confidentiality of information",
      "B": "Authentication of users",
      "C": "WAN management",
      "D": "Integrity of data",
      "E": "Authorization of users",
      "F": "Password management"
    },
    "answer": [
      "A",
      "B",
      "D"
    ],
    "explanation": "Confidentiality, authentication, and integrity are the three expected core VPN protections. Authorization may also be implemented by a VPN service, but the question asks for three selections and A B D is the conventional protection set. VPNs do not inherently manage every WAN or user password."
  },
  {
    "number": 20,
    "chapter": 1,
    "chapterName": "Network defense and wireless security",
    "type": "mcq",
    "question": "You need to transfer configuration files to a router across an unsecured network? Which protocol \nshould you use to encrypt the files in transit?",
    "options": {
      "A": "HTTPS",
      "B": "SSH",
      "C": "TELNET",
      "D": "TFTP"
    },
    "answer": "B",
    "explanation": "SSH protects router management and supports configuration-file transfers through SFTP or SCP. HTTPS can also encrypt a transfer if the router offers an HTTPS upload/download interface, so A is technically possible. SSH is the best conventional router-management answer; Telnet and TFTP do not encrypt the transfer."
  },
  {
    "number": 21,
    "chapter": 1,
    "chapterName": "Network defense and wireless security",
    "type": "mcq",
    "question": "Your home network seems to have slowed down considerably. You look at the home router GUI and \nnotice that an unknown host is attached to the network. What should you do to prevent this specific host \nfrom attaching to the network again?",
    "options": {
      "A": "Implement Mac address filtering",
      "B": "Create an IP access control list",
      "C": "Block the host IP address",
      "D": "Change the network SSID"
    },
    "answer": "A",
    "explanation": "A MAC denylist can block that observed address on a basic home router. It is a limited measure because addresses can be changed or spoofed; also remove the device, rotate exposed Wi-Fi credentials, and use strong wireless security."
  },
  {
    "number": 22,
    "chapter": 1,
    "chapterName": "Network defense and wireless security",
    "type": "mcq",
    "question": "Which encryption type is commonly used to secure wi-fi networks?",
    "options": {
      "A": "Advanced Encryption Algorithm (AES)",
      "B": "Triple Data Encryption Algorithm (Triple DES)",
      "C": "RSA (Rivest-Shamir-Adleman)",
      "D": "Data Encryption Standard (DES)"
    },
    "answer": "A",
    "explanation": "AES is the Wi-Fi encryption choice. Its correct expansion is Advanced Encryption Standard, even though the supplied option says Algorithm. Modern WPA2 configurations use AES-CCMP; RSA, DES, and Triple DES are not the appropriate modern Wi-Fi choice."
  },
  {
    "number": 23,
    "chapter": 1,
    "chapterName": "Network defense and wireless security",
    "type": "mcq",
    "question": "How does a honeypot enhance network security?",
    "options": {
      "A": "It detects and prevents identified threats through real-time packet inspection.",
      "B": "It acts as decoy and diverts malicious traffic away from important systems.",
      "C": "It isolates external-facing services from the Internet and protects them from attack.",
      "D": "It monitors network traffic and sends alerts when potential threats are detected."
    },
    "answer": "B",
    "explanation": "A honeypot attracts interaction with a decoy and creates opportunities to detect or study attacker behavior. It does not guarantee that attackers will avoid production systems; isolation and monitoring are necessary."
  },
  {
    "number": 24,
    "chapter": 1,
    "chapterName": "Network defense and wireless security",
    "type": "mcq",
    "question": "What should you create to prevent spoofing of the internal network?",
    "options": {
      "A": "A DNS record",
      "B": "An ACL",
      "C": "A record in the host file",
      "D": "A NAT rule"
    },
    "answer": "B",
    "explanation": "An anti-spoofing ACL can reject packets with impossible or unauthorized source addresses at a network boundary. NAT translates addresses; DNS and hosts-file records resolve names and do not enforce source-address validation."
  },
  {
    "number": 25,
    "chapter": 1,
    "chapterName": "Network defense and wireless security",
    "type": "mcq",
    "question": "A threat actor sets up a rogue access point (AP) at a local caf\u00e9. The rogue AP captures traffic and then \nforwards the traffic to the caf\u00e9 AP. Which type of attack does this scenario describe?",
    "options": {
      "A": "Man-in-the-middle",
      "B": "Ransomware",
      "C": "DDoS",
      "D": "Reconnaissance"
    },
    "answer": "A",
    "explanation": "The rogue access point relays the victim's traffic through attacker-controlled infrastructure, creating an on- path attack opportunity. Properly authenticated end-to-end encryption can limit exposure even when the network path is hostile."
  },
  {
    "number": 26,
    "chapter": 1,
    "chapterName": "Network defense and wireless security",
    "type": "mcq",
    "question": "Which network security technology passively monitors network traffic and compares the captured \npacket stream with known malicious signatures?",
    "options": {
      "A": "Proxy Server",
      "B": "Honeypot",
      "C": "IPS",
      "D": "IDS"
    },
    "answer": "D",
    "explanation": "A signature-based IDS observes traffic and alerts on known malicious patterns. An IPS commonly sits inline to block traffic, while a proxy intermediates requests and a honeypot is a decoy target."
  },
  {
    "number": 27,
    "chapter": 1,
    "chapterName": "Network defense and wireless security",
    "type": "mcq",
    "question": "A remote worker is visiting a branch office to attend face-to-face meetings. The worker tries to \nassociate their company laptop with the branch wireless access point (WAP) but is unable to do so What is \na possible cause?",
    "options": {
      "A": "The SSID is not broadcasting",
      "B": "The WAP is configured for MAC address filtering",
      "C": "The WAP is using open authentication.",
      "D": "The IP address of the laptop is not correct."
    },
    "answer": "B",
    "explanation": "A MAC allowlist can prevent a visiting laptop from associating if its address is not permitted. A hidden SSID may affect discovery or configuration, so A is also possible in some circumstances. A wrong IP address normally affects communication after association, not wireless association itself."
  },
  {
    "number": 28,
    "chapter": 1,
    "chapterName": "Network defense and wireless security",
    "type": "mcq",
    "question": "A restaurant installs a second wireless router that only employees can use Which statement describes \nhow to securely configure the new router?",
    "options": {
      "A": "Configure the SSID with the same SSID used by the customer router.",
      "B": "Configure the new router to filter IP addresses",
      "C": "Configure a higher signal strength to allow coverage in the parking lot",
      "D": "Configure the SSID with broadcast disabled"
    },
    "answer": "D",
    "explanation": "Disabling SSID broadcast hides the employee network name from casual public discovery, requiring employees to know the SSID to connect. In practice, pair hidden SSIDs with strong WPA2-AES or WPA3 encryption and network isolation from customer traffic. Sharing the customer SSID causes conflicts, IP filtering does not stop initial wireless association, and higher signal strength increases external exposure."
  },
  {
    "number": 29,
    "chapter": 1,
    "chapterName": "Network defense and wireless security",
    "type": "mcq",
    "question": "What should you create to prevent spoofing of the internal network?",
    "options": {
      "A": "A DNS record.",
      "B": "A NAT rule",
      "C": "A record in the host file",
      "D": "An ACL"
    },
    "answer": "D",
    "explanation": "An anti-spoofing ACL checks whether source addresses are appropriate for the interface or traffic direction. NAT and name-resolution records do not perform that filtering. This answer concerns source-IP spoofing, not every form of impersonation."
  },
  {
    "number": 30,
    "chapter": 1,
    "chapterName": "Network defense and wireless security",
    "type": "mcq",
    "question": "Your home network seems to have slowed down considerably. You look at the home router GUI and \nnotice that an unknown host is attached to the network. What should you do to prevent this specific host \nfrom attaching to the network again?",
    "options": {
      "A": "Implement MAC address filtering.",
      "B": "Create an IP access control list",
      "C": "Change the network SSID.",
      "D": "Block the host IP address."
    },
    "answer": "A",
    "explanation": "MAC filtering can deny the particular observed hardware address on a basic router, but the address can be spoofed. For lasting protection, remove unauthorized access, change exposed credentials, and enable strong Wi-Fi security."
  },
  {
    "number": 31,
    "chapter": 1,
    "chapterName": "Network defense and wireless security",
    "type": "mcq",
    "question": "You need to allow employees to access your company's secure network from their homes. Which type \nof security should you implement?",
    "options": {
      "A": "SNMP",
      "B": "VPN",
      "C": "BYOD",
      "D": "IDS"
    },
    "answer": "B",
    "explanation": "A VPN can provide authenticated, encrypted remote access to approved private resources. SNMP is for management, IDS for detection, and BYOD is an ownership/use policy rather than a secure transport mechanism."
  },
  {
    "number": 32,
    "chapter": 1,
    "chapterName": "Network defense and wireless security",
    "type": "mcq",
    "question": "You need to transfer configuration files to a router across an unsecured network. Which protocol \nshould you use to encrypt the files in transit?",
    "options": {
      "A": "TFTP",
      "B": "HTTP",
      "C": "SSH",
      "D": "Telnet"
    },
    "answer": "C",
    "explanation": "SSH protects supported router administration and file-transfer methods such as SFTP or SCP. TFTP, plain HTTP, and Telnet do not encrypt the content by default and are unsuitable for this untrusted path."
  },
  {
    "number": 33,
    "chapter": 1,
    "chapterName": "Network defense and wireless security",
    "type": "mcq",
    "question": "You need to filter the websites that are available to employees on the company network. Which type \nof device should you deploy?",
    "options": {
      "A": "IPS",
      "B": "Proxy server",
      "C": "IDS",
      "D": "Honeypot"
    },
    "answer": "B",
    "explanation": "A filtering proxy intermediates web requests and applies access policy to destinations or content. IDS reports activity, IPS can block attacks, and a honeypot is a decoy; none is the most direct fit for website-use policy."
  },
  {
    "number": 34,
    "chapter": 1,
    "chapterName": "Network defense and wireless security",
    "type": "mcq",
    "question": "Which wireless encryption technology required AES to secure home wireless network?",
    "options": {
      "A": "WEP",
      "B": "WPA",
      "C": "WPA2",
      "D": "TKIP"
    },
    "answer": "C",
    "explanation": "WPA2 with AES-CCMP provides wireless confidentiality and integrity protection. WEP and original WPA/ TKIP are obsolete choices; TKIP is a legacy mechanism rather than the modern AES-based answer."
  },
  {
    "number": 35,
    "chapter": 1,
    "chapterName": "Network defense and wireless security",
    "type": "multichoice",
    "question": "You are reviewing company remote access procedures and notice that telnet is being used to connect \nto the corporate database server to check on inventory levels. Which two actions should you take \nimmediately? (choose 2).",
    "options": {
      "A": "Force users to implement secure telnet passwords.",
      "B": "Disable telnet access on the server",
      "C": "Implement SSH access on the server",
      "D": "Reconfigure the server to only accept HTTPS connection"
    },
    "answer": [
      "B",
      "C"
    ],
    "explanation": "Disable Telnet and provide appropriately configured SSH for encrypted remote administration. A stronger Telnet password does not encrypt the session. HTTPS serves a different interface and is not automatically a drop-in CLI replacement."
  },
  {
    "number": 36,
    "chapter": 1,
    "chapterName": "Network defense and wireless security",
    "type": "mcq",
    "question": "A hospital needs to implement a system to secure remote access for employees using VPNs. The \nsolution must generate logs for accounting and provide centralized authentication using Active Directory. \nWhich solution will meet the requirements?",
    "options": {
      "A": "MFA",
      "B": "SSL VPN",
      "C": "RADIUS",
      "D": "NAT"
    },
    "answer": "C",
    "explanation": "RADIUS (Remote Authentication Dial-In User Service) is a centralized AAA protocol commonly integrated with VPN servers and Active Directory (such as Microsoft Network Policy Server) to authenticate remote users and record session accounting logs. MFA adds verification factors without centralized accounting, SSL VPN provides the encrypted tunnel rather than the authentication backend, and NAT translates IP addresses. 02 Identity access and professional practice"
  },
  {
    "number": 37,
    "chapter": 2,
    "chapterName": "Identity access and professional practice",
    "type": "mcq",
    "question": "Which of the following statements about multi-factor authentication (MFA) is correct?",
    "options": {
      "A": "MFA is a security measure that requires users to provide two or more forms of identification to gain access to a system or application.",
      "B": "MFA is a security measure that requires users to provide only one form of identification to gain access to a system or application",
      "C": "MFA is a security measure that is no longer recommended due to its complexity and potential for user errors.",
      "D": "MFA is a security measure that only applies to physical access control systems."
    },
    "answer": "A",
    "explanation": "MFA combines at least two different factor categories, such as a password and possession of a security token. Two passwords are still one factor category; simply asking for several pieces of identifying information is not enough."
  },
  {
    "number": 38,
    "chapter": 2,
    "chapterName": "Identity access and professional practice",
    "type": "mcq",
    "question": "Which of the following is true about security policies and procedures?",
    "options": {
      "A": "They should be regularly reviewed and updated to reflect changing threats and technologies",
      "B": "They should only be accessible to the IT department.",
      "C": "They should be documented once and never changed.",
      "D": "They should be kept confidential and not shared with employees."
    },
    "answer": "A",
    "explanation": "Policies must stay aligned with business requirements, technology, and threats. Employees need access to the policies relevant to their responsibilities; keeping all policies secret prevents consistent implementation."
  },
  {
    "number": 39,
    "chapter": 2,
    "chapterName": "Identity access and professional practice",
    "type": "mcq",
    "question": "Which of the following is a key requirement for conducting a security compliance audit?",
    "options": {
      "A": "A comprehensive understanding of security compliance standards and regulations",
      "B": "A certified auditor with expertise in security compliance",
      "C": "Compliance monitoring tools and systems",
      "D": "A detailed audit plan and checklist"
    },
    "answer": "A",
    "explanation": "An auditor needs to understand the standards and regulations that define the audit criteria. A detailed audit plan and checklist are also important, making D a defensible requirement. The question does not establish a unique mandatory prerequisite; certification and particular monitoring tools are not universally required."
  },
  {
    "number": 40,
    "chapter": 2,
    "chapterName": "Identity access and professional practice",
    "type": "mcq",
    "question": "Which of the following is a security best practice for securing data in the cloud?",
    "options": {
      "A": "Storing sensitive data in clear text",
      "B": "Implementing multi-factor authentication",
      "C": "Allowing unrestricted access to data",
      "D": "Using weak passwords"
    },
    "answer": "B",
    "explanation": "MFA reduces the chance that a stolen password alone can expose cloud data. Permissions, secure configuration, encryption, and monitoring are still needed; MFA does not replace those controls."
  },
  {
    "number": 41,
    "chapter": 2,
    "chapterName": "Identity access and professional practice",
    "type": "mcq",
    "question": "What is the purpose of multi-factor authentication?",
    "options": {
      "A": "To provide multiple layers of security by requiring users to provide more than one form of identification",
      "B": "To simplify the login process by only requiring one form of identification",
      "C": "To restrict access to certain users by requiring additional authorization",
      "D": "To prevent unauthorized access by encrypting user credentials"
    },
    "answer": "A",
    "explanation": "MFA requires evidence from different factor categories to reduce dependence on any one credential. It authenticates identity; authorization separately determines which resources an authenticated identity may use."
  },
  {
    "number": 42,
    "chapter": 2,
    "chapterName": "Identity access and professional practice",
    "type": "mcq",
    "question": "Which of the following is a best practice for managing security policies and procedures?",
    "options": {
      "A": "Implementing a regular review process for security policies",
      "B": "Relying solely on default security settings",
      "C": "Allowing users to create and manage their own security policies",
      "D": "Not documenting the security policies and procedures"
    },
    "answer": "A",
    "explanation": "Regular reviews keep policies usable and aligned with current risks. Default settings are not a substitute for organization-specific requirements, and undocumented or individually improvised policies cannot be governed consistently."
  },
  {
    "number": 43,
    "chapter": 2,
    "chapterName": "Identity access and professional practice",
    "type": "mcq",
    "question": "Which of the following is a best practice for implementing strong password policies within an \norganization?",
    "options": {
      "A": "Allowing users to choose their own passwords, regardless of complexity",
      "B": "Requiring users to change their password every 90 days",
      "C": "Storing passwords in clear text in a central database",
      "D": "Allowing users to reuse their previous passwords"
    },
    "answer": "B",
    "explanation": "B is the likely legacy intended key, but routine password changes every 90 days are not a current general best practice. NIST SP 800-63B-4 instead emphasizes adequate length, screening compromised values, and changes when compromise is evident. The other options weaken password security. Do not treat B as current NIST guidance."
  },
  {
    "number": 44,
    "chapter": 2,
    "chapterName": "Identity access and professional practice",
    "type": "mcq",
    "question": "What is the primary reason for implementing multi-factor authentication in a cloud environment?",
    "options": {
      "A": "To provide an additional layer of security",
      "B": "To simplify the authentication process",
      "C": "To reduce costs",
      "D": "To improve performance"
    },
    "answer": "A",
    "explanation": "MFA adds independent evidence of identity, making password theft alone less useful to an attacker. Its main purpose is reducing unauthorized access, not improving processing speed or reducing cloud costs."
  },
  {
    "number": 45,
    "chapter": 2,
    "chapterName": "Identity access and professional practice",
    "type": "mcq",
    "question": "Which of the following is an example of a data security principle?",
    "options": {
      "A": "Least Privilege",
      "B": "Session Management",
      "C": "ARP Spoofing",
      "D": "Ciphertext"
    },
    "answer": "A",
    "explanation": "Least privilege grants only the permissions required for a task. It limits accidental exposure and the damage a compromised account can cause. Session management is a control area; ARP spoofing is an attack."
  },
  {
    "number": 46,
    "chapter": 2,
    "chapterName": "Identity access and professional practice",
    "type": "mcq",
    "question": "Which of the following password policies is considered a best practice?",
    "options": {
      "A": "Requiring passwords to be changed every 5 years",
      "B": "Allowing users to set easily guessable passwords",
      "C": "Enforcing a minimum password length and complexity requirements",
      "D": "Storing passwords in plain text format"
    },
    "answer": "C",
    "explanation": "A minimum length is a useful password-policy requirement, so C is the best available option. Modern NIST guidance does not endorse arbitrary character-mixture requirements or routine periodic changes; it emphasizes sufficient length and compromised-password screening. Plaintext storage and guessable passwords are unsafe."
  },
  {
    "number": 47,
    "chapter": 2,
    "chapterName": "Identity access and professional practice",
    "type": "mcq",
    "question": "What is one of the ethical principles that guide the code of ethics for cybersecurity professionals?",
    "options": {
      "A": "Impersonation",
      "B": "Confidentiality",
      "C": "Anonymity",
      "D": "Discrimination"
    },
    "answer": "B",
    "explanation": "Confidentiality requires protecting information from unauthorized disclosure. Cybersecurity professionals must respect authorized access and disclosure boundaries; impersonation and discrimination are not professional ethical principles."
  },
  {
    "number": 48,
    "chapter": 2,
    "chapterName": "Identity access and professional practice",
    "type": "mcq",
    "question": "Which of the following is NOT a component of AAA?",
    "options": {
      "A": "Authorization",
      "B": "Accountability",
      "C": "Authentication",
      "D": "Accurate accounting"
    },
    "answer": "B",
    "explanation": "AAA expands to authentication, authorization, and accounting. Accountability is a related objective but is not one of the three terms in the standard expansion. Although D says Accurate accounting rather than simply Accounting, accounting is the relevant AAA function."
  },
  {
    "number": 49,
    "chapter": 2,
    "chapterName": "Identity access and professional practice",
    "type": "mcq",
    "question": "Which statement accurately describes the concept of a code of ethics in the cybersecurity field?",
    "options": {
      "A": "A document that articulates ethical standards for cybersecurity professionals.",
      "B": "A set of laws and regulations governing cybersecurity practices.",
      "C": "A framework outlining the steps of a cybersecurity attack.",
      "D": "A compilation of open-source tools for network security."
    },
    "answer": "A",
    "explanation": "A professional code of ethics states expected conduct, including authorization, confidentiality, and avoiding harm. It is distinct from legislation, technical attack frameworks, and a collection of software tools."
  },
  {
    "number": 50,
    "chapter": 2,
    "chapterName": "Identity access and professional practice",
    "type": "mcq",
    "question": "Which of the following is a common security control measure used to protect applications from \nunauthorized access?",
    "options": {
      "A": "File compression",
      "B": "Biometric authentication",
      "C": "Hard disk formatting",
      "D": "Data anonymization"
    },
    "answer": "B",
    "explanation": "Biometric authentication can verify a user before access is granted. Authorization still determines which application actions that user may perform. The other listed techniques do not authenticate an application user."
  },
  {
    "number": 51,
    "chapter": 2,
    "chapterName": "Identity access and professional practice",
    "type": "mcq",
    "question": "Which of the following access control methods is the most secure?",
    "options": {
      "A": "Biometric authentication",
      "B": "Multi-factor authentication",
      "C": "Single-factor authentication",
      "D": "Password-based authentication"
    },
    "answer": "B",
    "explanation": "MFA combines independent authentication factor categories and is generally stronger than a biometric or password used alone. Security depends on implementation; phishing-resistant MFA provides stronger protection against credential phishing. Biometrics alone are not automatically the most secure approach."
  },
  {
    "number": 52,
    "chapter": 2,
    "chapterName": "Identity access and professional practice",
    "type": "mcq",
    "question": "Which of the following is a key advantage of multifactor authentication?",
    "options": {
      "A": "It allows for anonymous access to systems and resources.",
      "B": "It simplifies the authentication process.",
      "C": "It eliminates the need for strong passwords.",
      "D": "It provides enhanced security by requiring multiple proofs of identity."
    },
    "answer": "D",
    "explanation": "Requiring independent proofs reduces the usefulness of a stolen single credential. MFA does not guarantee anonymity, remove every password requirement, or automatically make login simpler."
  },
  {
    "number": 53,
    "chapter": 2,
    "chapterName": "Identity access and professional practice",
    "type": "mcq",
    "question": "Which of the following represents a strong passphrase for securing a wireless SoHo network?",
    "options": {
      "A": "12345678",
      "B": "P@ssword!",
      "C": "CorrectHorseBatteryStaple",
      "D": "jumpr0pe"
    },
    "answer": "C",
    "explanation": "The long multiword passphrase has a stronger structure than the short or predictable alternatives. However, CorrectHorseBatteryStaple is a famous published example and must not be reused as a real password. Real passphrases should be long, unique, and unpredictably selected."
  },
  {
    "number": 54,
    "chapter": 2,
    "chapterName": "Identity access and professional practice",
    "type": "multichoice",
    "question": "Which of the following is an example of multifactor authentication?",
    "options": {
      "A": "Using a fingerprint scan only",
      "B": "Using a biometric scan and a passcode",
      "C": "Using a username and password only",
      "D": "Using a smart card and a PIN"
    },
    "answer": [
      "B",
      "D"
    ],
    "explanation": "A biometric plus a passcode combines inherence and knowledge in the introductory factor model. A smart card plus its PIN combines possession and knowledge. Both are MFA examples as worded; a real implementation must securely bind the factors and use an appropriate authenticator architecture."
  },
  {
    "number": 55,
    "chapter": 2,
    "chapterName": "Identity access and professional practice",
    "type": "mcq",
    "question": "Which network security concept focuses on limiting network access based on user roles and \nresponsibilities?",
    "options": {
      "A": "Intrusion detection",
      "B": "Access control",
      "C": "Vulnerability scanning",
      "D": "Network segmentation"
    },
    "answer": "B",
    "explanation": "Access control decides which identities may use which resources and actions. Role-based access control assigns permissions through roles reflecting responsibilities. Detection and segmentation support security but do not define role-based authorization."
  },
  {
    "number": 56,
    "chapter": 2,
    "chapterName": "Identity access and professional practice",
    "type": "mcq",
    "question": "You need to design your company's password policy to adhere to the National Insitute of standards \nand Technology (NIST) guidelines for user password security. What is the minimum password length to be \nconsistent with the NIST guidelines?",
    "options": {
      "A": "4 char",
      "B": "8 Char",
      "C": "16 char",
      "D": "No minimum length"
    },
    "answer": "B",
    "explanation": "Eight characters was the NIST minimum used by the older guidance relevant to this 2024 question. NIST SP 800-63B-4 now requires 15 characters for a password used as the sole factor and allows at least eight when used within MFA. No option gives the exact current single-factor minimum."
  },
  {
    "number": 57,
    "chapter": 2,
    "chapterName": "Identity access and professional practice",
    "type": "multichoice",
    "question": "Which two passwords follow strong password policy guidelines? (Choose 2)",
    "options": {
      "A": "1mPressm3!",
      "B": "Feb121978",
      "C": "Wh@tareyouDo1ngtoday4",
      "D": "Fluffy#"
    },
    "answer": [
      "A",
      "C"
    ],
    "explanation": "A and C best satisfy traditional mixed-character password rules compared with a birthdate or short pet name. A is only nine characters, so it does not meet the current NIST single-factor minimum of 15. C is longer, but neither a printed example nor symbol substitution alone proves unpredictability; never reuse these examples as real credentials."
  },
  {
    "number": 58,
    "chapter": 2,
    "chapterName": "Identity access and professional practice",
    "type": "mcq",
    "question": "You work for a hospital that stores electronic protected heath information (ePHI) in an online portal. \nAuthorized employees can use their mobile devices to access patient ePHI. You need to ensure that \nemployees' mobile devices comply with HIPAA regulations. Which safeguard should you develop and \nimplement",
    "options": {
      "A": "a policy that requires multi-factor authentication to use the mobile device",
      "B": "a contingency plan",
      "C": "a policy to govern how ePHI is removed from mobile devices",
      "D": "an ownership policy for employees' mobile devices"
    },
    "answer": "C",
    "explanation": "A policy governing removal of ePHI most directly protects sensitive data during device disposal or reuse. MFA and contingency planning are also relevant safeguards, so the broad question does not make C uniquely sufficient for all HIPAA compliance. Device ownership alone is not an adequate ePHI safeguard."
  },
  {
    "number": 59,
    "chapter": 2,
    "chapterName": "Identity access and professional practice",
    "type": "mcq",
    "question": "Which security assessment of IT systems verifies that PII data is available, accurate, confidential, and \naccessible only by authorized users?",
    "options": {
      "A": "Risk framing",
      "B": "Information assurance",
      "C": "Workflow management",
      "D": "Cyber Kill Chain"
    },
    "answer": "B",
    "explanation": "Information assurance concerns maintaining trustworthy information and services, including confidentiality, integrity, and availability. Risk framing establishes context; workflow management and the Cyber Kill Chain serve different purposes."
  },
  {
    "number": 60,
    "chapter": 2,
    "chapterName": "Identity access and professional practice",
    "type": "match",
    "question": "Match each framework from the list on the left to correct purpose on the right",
    "pairs": [
      {
        "left": "GDPR",
        "right": "Protects the personal information of members/individuals of the European Union"
      },
      {
        "left": "HIPAA",
        "right": "Protects the healthcare information of individuals"
      },
      {
        "left": "PCI-DSS",
        "right": "Protects credit card / payment card information of individuals"
      },
      {
        "left": "FERPA",
        "right": "Protects the educational records of individuals"
      },
      {
        "left": "FISMA",
        "right": "Protects information about individuals that is stored by federal agencies"
      }
    ],
    "explanation": "GDPR is the best match for the EU personal-data description, while FISMA is the best available match for federal systems. HIPAA, PCI-DSS, and FERPA correspond to health, payment card, and education information. GDPR scope is not limited to EU citizenship, and FISMA is broader than a law solely about individuals' information."
  },
  {
    "number": 61,
    "chapter": 2,
    "chapterName": "Identity access and professional practice",
    "type": "multichoice",
    "question": "Your company is creating a BYOD policy to allow employees to join their personal smartphones to the \ncompany network Which three requirements are commonly included in a BYOD policy? (Choose 3.)",
    "options": {
      "A": "Upgrade of data plan to maximum available",
      "B": "Configuration of a strong password",
      "C": "Installation of secure apps only",
      "D": "Encryption of stored confidential corporate data",
      "E": "Deletion of all personal data from the phone",
      "F": "Synchronization of phone lock screen password with network access password"
    },
    "answer": [
      "B",
      "C",
      "D"
    ],
    "explanation": "BYOD policies commonly require strong device authentication, approved secure applications, and encryption of corporate data. They should define management and selective-removal rights; deleting all personal data or reusing the network password is not a universal requirement."
  },
  {
    "number": 62,
    "chapter": 2,
    "chapterName": "Identity access and professional practice",
    "type": "classify",
    "question": "For each statement, select True if the statement adheres to the cybersecurity code of ethics or False if it does not.",
    "categories": [
      "True",
      "False"
    ],
    "items": [
      {
        "text": "A security analyst may use a disgruntled employee network credential to monitor behavior",
        "category": "False"
      },
      {
        "text": "A security analyst may access employee data on a company server if authorized",
        "category": "True"
      },
      {
        "text": "A security analyst may share sensitive data with unauthorized users",
        "category": "False"
      }
    ],
    "explanation": "The intended answers are F, T, F. Analysts must act within explicit authorization, use approved accounts, and preserve confidentiality. Access through another employee's credentials is not justified merely because the employee is disgruntled; specially authorized investigations must follow policy and legal requirements."
  },
  {
    "number": 63,
    "chapter": 2,
    "chapterName": "Identity access and professional practice",
    "type": "multichoice",
    "question": "Which three authentication factors are valid for use in a multifactor authentication scenario? (choose \n3)",
    "options": {
      "A": "Something you are",
      "B": "Something you see",
      "C": "Something you know",
      "D": "Something you earn",
      "E": "Something you have",
      "F": "Somethings you do"
    },
    "answer": [
      "A",
      "C",
      "E"
    ],
    "explanation": "The standard introductory categories are something you know, something you have, and something you are. Multiple checks from one category do not create MFA. Behavioral signals may support security decisions but are outside this question's conventional three-category model."
  },
  {
    "number": 64,
    "chapter": 2,
    "chapterName": "Identity access and professional practice",
    "type": "match",
    "question": "Match each framework from the list on the left to the correct purpose on the right",
    "pairs": [
      {
        "left": "GDPR",
        "right": "Protects the personal information of members/individuals of the European Union"
      },
      {
        "left": "HIPAA",
        "right": "Protects the healthcare information of individuals"
      },
      {
        "left": "PCI-DSS",
        "right": "Protects credit card / payment card information of individuals"
      },
      {
        "left": "FERPA",
        "right": "Protects the educational records of individuals"
      },
      {
        "left": "FISMA",
        "right": "Protects information about individuals that is stored by federal agencies"
      }
    ],
    "explanation": "Match GDPR to the EU personal-data description, HIPAA to health information, PCI-DSS to payment card data, FERPA to education records, and FISMA to federal systems. The descriptions are simplified: GDPR scope is not based solely on EU membership or citizenship, and FISMA is federal information-security legislation."
  },
  {
    "number": 65,
    "chapter": 2,
    "chapterName": "Identity access and professional practice",
    "type": "mcq",
    "question": "In order to do online banking, you enter a strong password and then enter the 5- digit code sent to you \non your smartphone. Which type of authentication does this situation describe?",
    "options": {
      "A": "VPN",
      "B": "Multifactor",
      "C": "AAA",
      "D": "RADIUS"
    },
    "answer": "B",
    "explanation": "A password plus a one-time code received on a phone combines knowledge and possession. SMS-based MFA has interception and phishing limitations; a phishing-resistant authenticator can provide stronger protection."
  },
  {
    "number": 66,
    "chapter": 2,
    "chapterName": "Identity access and professional practice",
    "type": "multichoice",
    "question": "You work for a community health care organization that uses an electronic health record (HER) system. \nYou have implemented the physical and technical safeguards required by HIPAA. You need to prove that the \nEHR system is compliant with those safeguards. Which two approaches should you use to verify the system \nis compliant? (choose 2).",
    "options": {
      "A": "Automatic log-off implementation",
      "B": "Penetration testing",
      "C": "Security awareness training",
      "D": "IT auditing"
    },
    "answer": [
      "B",
      "D"
    ],
    "explanation": "Authorized penetration testing and IT auditing assess whether controls operate as intended. Automatic logoff and awareness training are safeguards, not independent verification methods. These checks contribute evidence and do not by themselves certify full HIPAA compliance."
  },
  {
    "number": 67,
    "chapter": 2,
    "chapterName": "Identity access and professional practice",
    "type": "mcq",
    "question": "A security assessment showed that a system administrator accessed files outside of his work hours, \nlisted the commands he executed, and indicated how long he was connected to the system. Which AAA \ncomponent does this represent?",
    "options": {
      "A": "Authentication",
      "B": "Authorization",
      "C": "Auditing",
      "D": "Accounting"
    },
    "answer": "D",
    "explanation": "Within the AAA framework (Authentication, Authorization, and Accounting), accounting tracks and records user activity during a session, including connection duration, timestamps, commands executed, and resources accessed. Authentication verifies identity, authorization enforces access permissions, and auditing is a compliance review process rather than one of the three AAA words. 03 Cryptography and information protection"
  },
  {
    "number": 68,
    "chapter": 3,
    "chapterName": "Cryptography and information protection",
    "type": "mcq",
    "question": "What is a key principle of securing data in the cloud?",
    "options": {
      "A": "Implementing strong physical security measures",
      "B": "Encrypting data at rest and in transit",
      "C": "Using complex passwords for all cloud users",
      "D": "Limiting access to the cloud from specific IP addresses"
    },
    "answer": "B",
    "explanation": "Encryption at rest protects stored information, while encryption in transit protects information moving between systems. Access controls, physical safeguards, and key management remain necessary alongside encryption."
  },
  {
    "number": 69,
    "chapter": 3,
    "chapterName": "Cryptography and information protection",
    "type": "mcq",
    "question": "Which of the following is the most secure and recommended method for storing sensitive user data in \na database?",
    "options": {
      "A": "Storing the data in plain text",
      "B": "Using symmetric encryption",
      "C": "Using hashing algorithms",
      "D": "Using asymmetric encryption"
    },
    "answer": "B",
    "explanation": "Symmetric encryption is the best listed way to protect recoverable sensitive records efficiently. If the data means passwords, use salted, computationally expensive password hashing instead. The question does not specify the data type, so no method is universally the most secure for every kind of user data."
  },
  {
    "number": 70,
    "chapter": 3,
    "chapterName": "Cryptography and information protection",
    "type": "mcq",
    "question": "Which of the following is a principle of data security?",
    "options": {
      "A": "Encryption",
      "B": "Firewall",
      "C": "Intrusion Detection System",
      "D": "Data Masking"
    },
    "answer": "A",
    "explanation": "Encryption is a common data-protection technique and is the likely intended answer. Data masking is also a protection technique. Strictly, neither is a foundational security principle such as confidentiality, integrity, or least privilege, so the wording does not yield a uniquely precise answer."
  },
  {
    "number": 71,
    "chapter": 3,
    "chapterName": "Cryptography and information protection",
    "type": "mcq",
    "question": "Which of the following is a data protection technique that involves the transformation of data into a \nformat that is unreadable to unauthorized users?",
    "options": {
      "A": "Authentication",
      "B": "Encryption",
      "C": "Firewall",
      "D": "Intrusion Detection System"
    },
    "answer": "B",
    "explanation": "Encryption makes data unintelligible without the appropriate key. Authentication verifies an identity, while firewalls and IDSs control or observe network traffic rather than cryptographically transforming the data."
  },
  {
    "number": 72,
    "chapter": 3,
    "chapterName": "Cryptography and information protection",
    "type": "mcq",
    "question": "Which of the following encryption algorithms is considered strong?",
    "options": {
      "A": "RSA",
      "B": "MD5",
      "C": "ROT13",
      "D": "DES"
    },
    "answer": "A",
    "explanation": "RSA is the strongest listed encryption choice when appropriate key sizes and secure padding are used. MD5 is a broken hash function rather than encryption, ROT13 is weak substitution, and DES has an inadequate key size. RSA is not a guarantee against every future cryptanalytic threat."
  },
  {
    "number": 73,
    "chapter": 3,
    "chapterName": "Cryptography and information protection",
    "type": "mcq",
    "question": "Which encryption method is used to secure data while it is being actively used and processed by an \napplication?",
    "options": {
      "A": "Asymmetric encryption",
      "B": "Homomorphic encryption",
      "C": "Secure Sockets Layer (SSL)",
      "D": "Hash encryption"
    },
    "answer": "B",
    "explanation": "Homomorphic encryption allows supported calculations to operate on ciphertext. It is a specialized way to protect data during computation, with practical limits; ordinary applications often decrypt data in memory while processing it."
  },
  {
    "number": 74,
    "chapter": 3,
    "chapterName": "Cryptography and information protection",
    "type": "mcq",
    "question": "What type of encryption is used to secure data that is stored on a hard drive or other storage media?",
    "options": {
      "A": "File-based encryption",
      "B": "Hash encryption",
      "C": "Symmetric encryption",
      "D": "Public Key Infrastructure (PKI)"
    },
    "answer": "C",
    "explanation": "Symmetric encryption commonly protects disks and stored files efficiently. File-based encryption in A describes a scope or method that can itself use symmetric encryption, so the alternatives overlap. Hash encryption is not a correct cryptographic category, and PKI is a trust infrastructure."
  },
  {
    "number": 75,
    "chapter": 3,
    "chapterName": "Cryptography and information protection",
    "type": "mcq",
    "question": "Which of the following is a characteristic of weak encryption algorithms?",
    "options": {
      "A": "They support secure communication protocols.",
      "B": "They are susceptible to cryptanalysis attacks.",
      "C": "They are resistant to brute force attacks.",
      "D": "They provide encryption keys with longer bit lengths."
    },
    "answer": "B",
    "explanation": "Weak algorithms may be vulnerable to cryptanalysis, brute force, or structural attacks. A long key is useful only when the algorithm and implementation are also sound; key length alone cannot repair a broken design."
  },
  {
    "number": 76,
    "chapter": 3,
    "chapterName": "Cryptography and information protection",
    "type": "mcq",
    "question": "What is the purpose of encryption in network security?",
    "options": {
      "A": "To monitor and detect network attacks",
      "B": "To authenticate and authorize users",
      "C": "To protect the confidentiality and integrity of data during transmission",
      "D": "To prevent unauthorized physical access to network devices"
    },
    "answer": "C",
    "explanation": "Encryption protects confidentiality. Integrity additionally requires authentication, such as an authenticated- encryption mode or a suitable MAC. C is the intended protection-oriented answer, but ordinary encryption alone does not automatically provide both properties."
  },
  {
    "number": 77,
    "chapter": 3,
    "chapterName": "Cryptography and information protection",
    "type": "mcq",
    "question": "Which cryptographic technique is used to ensure the integrity of data without the ability to reverse \nthe process?",
    "options": {
      "A": "Hashing algorithm",
      "B": "Digital signature",
      "C": "Asymmetric encryption",
      "D": "Symmetric encryption"
    },
    "answer": "A",
    "explanation": "A cryptographic hash produces a fixed-length digest and is designed to resist recovery of its input. Comparing a digest to a trusted reference can detect changes. An attacker who can replace both a file and its unprotected hash can evade that check."
  },
  {
    "number": 78,
    "chapter": 3,
    "chapterName": "Cryptography and information protection",
    "type": "mcq",
    "question": "What is encryption?",
    "options": {
      "A": "A process of converting plaintext into binary code to enhance data accessibility",
      "B": "A process of converting binary code into plaintext to improve data reliability",
      "C": "A process of converting plaintext into ciphertext to protect data confidentiality",
      "D": "A process of converting ciphertext into plaintext to secure data integrity"
    },
    "answer": "C",
    "explanation": "Encryption transforms plaintext into ciphertext using an algorithm and key to protect confidentiality. Decryption reverses that transformation with the appropriate key; simply converting text into binary does not secure it."
  },
  {
    "number": 79,
    "chapter": 3,
    "chapterName": "Cryptography and information protection",
    "type": "mcq",
    "question": "What is a digital certificate used for in the context of cybersecurity?",
    "options": {
      "A": "Encrypting data",
      "B": "Verifying the identity of an entity",
      "C": "Creating a secure tunnel",
      "D": "Decrypting data"
    },
    "answer": "B",
    "explanation": "A digital certificate binds an identity or name to a public key through an issuer's signature. Validation checks the trust chain, name, validity, and relevant status; a certificate alone does not encrypt all application data."
  },
  {
    "number": 80,
    "chapter": 3,
    "chapterName": "Cryptography and information protection",
    "type": "mcq",
    "question": "Which technology is responsible for managing cryptographic keys, digital certificates, and providing \nother security-related services?",
    "options": {
      "A": "Intrusion Detection System (IDS)",
      "B": "Virtual Private Network (VPN)",
      "C": "Public Key Infrastructure (PKI)",
      "D": "Firewall"
    },
    "answer": "C",
    "explanation": "PKI manages trust in public keys through certificates, certificate authorities, and related processes. It supports identity validation and secure key use; a firewall or IDS is not a certificate-management architecture."
  },
  {
    "number": 81,
    "chapter": 3,
    "chapterName": "Cryptography and information protection",
    "type": "mcq",
    "question": "Which encryption method uses a single key to both encrypt and decrypt data?",
    "options": {
      "A": "SSL/TLS",
      "B": "Symmetric encryption",
      "C": "Hashing",
      "D": "Asymmetric encryption"
    },
    "answer": "B",
    "explanation": "Symmetric encryption uses the same secret key for encryption and decryption. Asymmetric cryptography uses a related public/private key pair; hashing is a one-way transformation rather than encryption."
  },
  {
    "number": 82,
    "chapter": 3,
    "chapterName": "Cryptography and information protection",
    "type": "mcq",
    "question": "Which of the following is an integral part of the CIA triad in cybersecurity?",
    "options": {
      "A": "Data loss prevention (DLP)",
      "B": "Two-factor authentication (2FA)",
      "C": "Intrusion Detection System (IDS)",
      "D": "Firewall",
      "E": "None of the above (No CIA triad member is listed)"
    },
    "answer": "E",
    "explanation": "The CIA triad consists of confidentiality, integrity, and availability. DLP, two-factor authentication, IDS, and firewalls are security controls rather than members of the triad. None of the options is a technically correct answer to the question as written."
  },
  {
    "number": 83,
    "chapter": 3,
    "chapterName": "Cryptography and information protection",
    "type": "mcq",
    "question": "Which of the following best describes the concept of data integrity in cybersecurity?",
    "options": {
      "A": "Ensuring data is available for authorized users when needed",
      "B": "Encrypting data to prevent unauthorized modifications",
      "C": "Protecting data from unauthorized access or disclosure",
      "D": "Ensuring data is accurate, consistent, and trustworthy"
    },
    "answer": "D",
    "explanation": "Integrity means protecting the accuracy and completeness of information against unauthorized or improper change. Availability concerns access when needed, and confidentiality concerns preventing unauthorized disclosure."
  },
  {
    "number": 84,
    "chapter": 3,
    "chapterName": "Cryptography and information protection",
    "type": "mcq",
    "question": "Which type of encryption protects data while it is being transmitted over a network?",
    "options": {
      "A": "Transport Layer Security (TLS)",
      "B": "Asymmetric encryption",
      "C": "Symmetric encryption",
      "D": "Hash encryption"
    },
    "answer": "A",
    "explanation": "TLS is the protocol specifically designed to protect data in transit, using cryptographic mechanisms including symmetric session encryption. B and C are algorithm families used within secure systems, not the specific transport-protection protocol. Hash encryption is not a valid category."
  },
  {
    "number": 85,
    "chapter": 3,
    "chapterName": "Cryptography and information protection",
    "type": "mcq",
    "question": "Which macOS security feature encrypts the entre macOS volume?",
    "options": {
      "A": "Gatekeeper",
      "B": "FileVault",
      "C": "XProtect",
      "D": "System Integrity Protection (SIP)"
    },
    "answer": "B",
    "explanation": "FileVault encrypts the Mac's startup volume and protects stored data when it is locked. Gatekeeper checks application trust, XProtect detects known malware, and SIP restricts changes to protected operating-system areas."
  },
  {
    "number": 86,
    "chapter": 3,
    "chapterName": "Cryptography and information protection",
    "type": "mcq",
    "question": "Which data type is protected through hard disk encryption?",
    "options": {
      "A": "Data in use",
      "B": "Data in transit",
      "C": "Data at rest",
      "D": "Data in process"
    },
    "answer": "C",
    "explanation": "Disk encryption protects data at rest on storage media. Data crossing a network is in transit; data being processed is in use. An unlocked, compromised endpoint can still expose decrypted information."
  },
  {
    "number": 87,
    "chapter": 3,
    "chapterName": "Cryptography and information protection",
    "type": "match",
    "question": "Match each definition from the list on the left to the correct CIA Triad term on the right.",
    "pairs": [
      {
        "left": "Confidentiality",
        "right": "Data should be accessed and read only by authorized users"
      },
      {
        "left": "Integrity",
        "right": "Data should never be altered or compromised without authorization"
      },
      {
        "left": "Availability",
        "right": "Legitimate requests should have access to data at all times"
      }
    ],
    "explanation": "Confidentiality restricts disclosure, integrity protects against unauthorized alteration, and availability supports timely reliable access. Authorized changes are compatible with integrity; availability is a design objective rather than a promise of absolute uninterrupted access."
  },
  {
    "number": 88,
    "chapter": 3,
    "chapterName": "Cryptography and information protection",
    "type": "mcq",
    "question": "The company web server collects information through a form. The form is accessed by using port 80 . \nThe form content is transferred to an encrypted database for storage. You are investigating a complaint that \nthe form content has been compromised. What is the cause of the security breach?",
    "options": {
      "A": "The data was transferred to the database using a nonsecure protocol.",
      "B": "The web browser used to access the site was not updated to the latest version.",
      "C": "The website was accessed using HTTP, which is an unencrypted protocol.",
      "D": "The database was compromised"
    },
    "answer": "C",
    "explanation": "Plain HTTP does not encrypt form submissions between browser and server. Encrypting the destination database does not repair that exposed network leg; use correctly configured HTTPS. The scenario identifies an exposure, not definitive proof of the actual breach path."
  },
  {
    "number": 89,
    "chapter": 3,
    "chapterName": "Cryptography and information protection",
    "type": "match",
    "question": "Match each definition from the list on the left to the correct CIA Triad term on the right.",
    "pairs": [
      {
        "left": "Confidentiality",
        "right": "Data should be accessed and read only by authorized users"
      },
      {
        "left": "Integrity",
        "right": "Data should never be altered or compromised without authorization"
      },
      {
        "left": "Availability",
        "right": "Legitimate requests should have access to data at all times"
      }
    ],
    "explanation": "Confidentiality restricts disclosure, integrity prevents improper alteration, and availability supports timely access. The matching wording is simplified: integrity allows authorized changes, and availability does not promise literal uninterrupted access at all times."
  },
  {
    "number": 90,
    "chapter": 3,
    "chapterName": "Cryptography and information protection",
    "type": "mcq",
    "question": "Which data type is protected through hard disk encryption?",
    "options": {
      "A": "Data in process",
      "B": "Data at rest",
      "C": "Data in transit",
      "D": "Data in use"
    },
    "answer": "B",
    "explanation": "Full-disk encryption protects stored data at rest, particularly when the device is locked or powered off. It does not alone protect data during network transfer or from malware running in an unlocked user session."
  },
  {
    "number": 91,
    "chapter": 3,
    "chapterName": "Cryptography and information protection",
    "type": "mcq",
    "question": "What does hashing provide for the communication?",
    "options": {
      "A": "Data integrity",
      "B": "Data encryption",
      "C": "Data non-repudiation",
      "D": "Origin authentication"
    },
    "answer": "A",
    "explanation": "Hashing supports integrity checking by producing a digest that changes when the input changes. The reference digest must be trusted; an unkeyed hash by itself does not prove who sent the message or provide non- repudiation. 04 Threats attacks and adversaries"
  },
  {
    "number": 92,
    "chapter": 4,
    "chapterName": "Threats attacks and adversaries",
    "type": "mcq",
    "question": "What is a common security threat in which an attacker attempts to overwhelm a targeted system by \nflooding it with Internet traffic?",
    "options": {
      "A": "Ransomware",
      "B": "Distributed Denial of Service (DDoS) attack",
      "C": "Phishing",
      "D": "SQL injection"
    },
    "answer": "B",
    "explanation": "A distributed denial-of-service attack uses multiple sources to exhaust a service's capacity or resources. Ransomware extorts victims, phishing deceives users, and SQL injection targets unsafe database queries."
  },
  {
    "number": 93,
    "chapter": 4,
    "chapterName": "Threats attacks and adversaries",
    "type": "mcq",
    "question": "What is the purpose of Security Information and Event Management (SIEM) systems?",
    "options": {
      "A": "To analyze network traffic and detect potential security threats.",
      "B": "To centrally collect, store, and analyze logs from various systems to detect and respond to security incidents.",
      "C": "To encrypt sensitive data to protect it from unauthorized access.",
      "D": "To authenticate and authorize users to access network resources."
    },
    "answer": "B",
    "explanation": "A SIEM centralizes logs and correlates events to support threat detection and investigation. It may ingest network alerts, but it is not simply a packet analyzer, encryption service, or access-control system."
  },
  {
    "number": 94,
    "chapter": 4,
    "chapterName": "Threats attacks and adversaries",
    "type": "mcq",
    "question": "What is a common vulnerability in cloud-based systems?",
    "options": {
      "A": "Inadequate access controls",
      "B": "Outdated antivirus software",
      "C": "Weak passwords",
      "D": "Lack of network segmentation"
    },
    "answer": "A",
    "explanation": "Inadequate access controls can expose cloud resources and are a broadly applicable cloud-security weakness. Weak passwords, poor segmentation, and outdated protection can also be vulnerabilities. A is the best general access-control answer, but the question does not provide enough context to rule out every other choice."
  },
  {
    "number": 95,
    "chapter": 4,
    "chapterName": "Threats attacks and adversaries",
    "type": "mcq",
    "question": "Which security technology uses an agent-based approach to protect endpoints and is designed to \ndetect and prevent malicious activities?",
    "options": {
      "A": "Firewall",
      "B": "Intrusion Prevention System (IPS)",
      "C": "Data Loss Prevention (DLP)",
      "D": "Advanced Malware Protection (AMP)"
    },
    "answer": "D",
    "explanation": "Cisco Advanced Malware Protection, now associated with Cisco Secure Endpoint branding, uses endpoint software to detect and respond to malicious activity. Other products can also have agents, so the Cisco product context makes this choice specific."
  },
  {
    "number": 96,
    "chapter": 4,
    "chapterName": "Threats attacks and adversaries",
    "type": "mcq",
    "question": "Which of the following is a common security threat that targets web applications?",
    "options": {
      "A": "SQL injection",
      "B": "DNS poisoning",
      "C": "Man-in-the-middle attack",
      "D": "Distributed Denial of Service (DDoS)"
    },
    "answer": "A",
    "explanation": "SQL injection directly targets unsafe handling of database queries in an application. DNS poisoning, on-path attacks, and DDoS can also affect web services, but SQL injection is the most clearly application-specific example among these choices. The wording is broader than a question identifying a unique attack mechanism."
  },
  {
    "number": 97,
    "chapter": 4,
    "chapterName": "Threats attacks and adversaries",
    "type": "mcq",
    "question": "What is malware?",
    "options": {
      "A": "A form of cyber attack that attempts to gain unauthorized access to a network.",
      "B": "A software program that is designed to damage, disrupt, or gain unauthorized access to a computer system.",
      "C": "A technique used by attackers to obtain sensitive information through deception.",
      "D": "A network of compromised computers used to carry out coordinated attacks."
    },
    "answer": "B",
    "explanation": "Malware is software designed for harmful or unauthorized activity. It includes ransomware, spyware, viruses, and worms. A botnet is a collection of compromised systems rather than the general definition of malware."
  },
  {
    "number": 98,
    "chapter": 4,
    "chapterName": "Threats attacks and adversaries",
    "type": "mcq",
    "question": "What does hardening mean in the context of cybersecurity?",
    "options": {
      "A": "Removing all vulnerabilities from a system or network",
      "B": "Implementing cybersecurity policies and regulations",
      "C": "Creating a backup of critical data and configurations",
      "D": "Making a system more resistant to threats and attacks"
    },
    "answer": "D",
    "explanation": "Hardening reduces attack surface through secure configuration, patching, least privilege, and disabling unnecessary services. It improves resistance to attack without guaranteeing that every vulnerability has been eliminated."
  },
  {
    "number": 99,
    "chapter": 4,
    "chapterName": "Threats attacks and adversaries",
    "type": "mcq",
    "question": "Which of the following best describes network security?",
    "options": {
      "A": "Ensuring high availability and performance of the network",
      "B": "Securing physical access to network devices",
      "C": "Protecting data from unauthorized access or modifications",
      "D": "Preventing network configuration errors"
    },
    "answer": "C",
    "explanation": "Network security protects information and services through confidentiality, integrity, and availability. Physical security and reliable configuration contribute to that goal but do not alone define its full scope."
  },
  {
    "number": 100,
    "chapter": 4,
    "chapterName": "Threats attacks and adversaries",
    "type": "mcq",
    "question": "What is spear phishing?",
    "options": {
      "A": "A physical attack where an unauthorized person gains entry to a restricted area by following closely behind an authorized person.",
      "B": "A form of social engineering attack that uses SMS or text messages to trick victims into revealing sensitive information.",
      "C": "A cyber attack where an attacker manipulates and deceives an individual to reveal sensitive information.",
      "D": "A type of phishing attack that targets specific individuals or organizations."
    },
    "answer": "D",
    "explanation": "Spear phishing targets a particular person, role, or organization with tailored deception. Smishing uses text messages, while tailgating is unauthorized physical entry behind another person."
  },
  {
    "number": 101,
    "chapter": 4,
    "chapterName": "Threats attacks and adversaries",
    "type": "mcq",
    "question": "What type of security technique involves setting up a decoy system or network to lure and trap \npotential attackers?",
    "options": {
      "A": "Honeypot",
      "B": "Virtualization",
      "C": "DMZ",
      "D": "Proxy"
    },
    "answer": "A",
    "explanation": "A honeypot is a deliberately monitored decoy that attracts or reveals attacker behavior. It must be isolated appropriately and does not replace production controls. A DMZ is a network zone rather than inherently a decoy."
  },
  {
    "number": 102,
    "chapter": 4,
    "chapterName": "Threats attacks and adversaries",
    "type": "mcq",
    "question": "Which of the following is an example of a web application vulnerability that can be exploited by an \nattacker?",
    "options": {
      "A": "Network latency",
      "B": "Disk fragmentation",
      "C": "Buffer overflow",
      "D": "Cross-site scripting (XSS)"
    },
    "answer": "D",
    "explanation": "XSS is a well-known web vulnerability that allows untrusted script to execute in a browser in the application context. Buffer overflow can also affect native components of a web application, so C is not universally impossible. D is the strongest directly web-specific choice; latency and fragmentation are not vulnerabilities by themselves."
  },
  {
    "number": 103,
    "chapter": 4,
    "chapterName": "Threats attacks and adversaries",
    "type": "mcq",
    "question": "What are botnets?",
    "options": {
      "A": "An attack that manipulates individuals into revealing sensitive information or performing certain actions.",
      "B": "A network of compromised computers controlled by a central entity to carry out malicious activities.",
      "C": "A form of cyber attack that attempts to gain unauthorized access to a network.",
      "D": "A software program that is designed to damage, disrupt, or gain unauthorized access to a computer system."
    },
    "answer": "B",
    "explanation": "A botnet is a collection of compromised devices controlled for malicious activity such as DDoS or spam. B is the best listed description. The command-and-control architecture may be centralized or peer-to-peer, so a single central controller is not required."
  },
  {
    "number": 104,
    "chapter": 4,
    "chapterName": "Threats attacks and adversaries",
    "type": "mcq",
    "question": "Which of the following is a common threat to cybersecurity?",
    "options": {
      "A": "Software updates",
      "B": "Data encryption",
      "C": "User authentication",
      "D": "Phishing attacks"
    },
    "answer": "D",
    "explanation": "Phishing deceives users into disclosing information or taking harmful actions. Updates, encryption, and authentication are normally protective activities, although attackers can imitate them as part of a lure."
  },
  {
    "number": 105,
    "chapter": 4,
    "chapterName": "Threats attacks and adversaries",
    "type": "mcq",
    "question": "What is a denial of service (DoS) attack?",
    "options": {
      "A": "A technique used by attackers to obtain sensitive information through deception.",
      "B": "A software program that is designed to damage, disrupt, or gain unauthorized access to a computer system.",
      "C": "A form of cyber attack that attempts to gain unauthorized access to a network.",
      "D": "An attack that overwhelms a target system with a flood of traffic or requests, rendering it inaccessible to legitimate users."
    },
    "answer": "D",
    "explanation": "A denial-of-service attack makes a service unavailable by exhausting capacity or exploiting a fault. Flooding is one method. A distributed attack uses multiple sources; unauthorized access is not required to cause denial of service."
  },
  {
    "number": 106,
    "chapter": 4,
    "chapterName": "Threats attacks and adversaries",
    "type": "multichoice",
    "question": "What is an attack vector in cybersecurity?",
    "options": {
      "A": "The method used by an attacker to gain unauthorized access",
      "B": "A vulnerability in a system that can be exploited",
      "C": "The path or means through which an attacker can exploit vulnerabilities",
      "D": "The likelihood of a cyber attack taking place"
    },
    "answer": [
      "A",
      "C"
    ],
    "explanation": "Both A and C describe an attack vector: the route or method an attacker uses to reach or exploit a target. B is a vulnerability and D is a likelihood. Because A and C overlap, the question cannot fairly require only one of those two choices."
  },
  {
    "number": 107,
    "chapter": 4,
    "chapterName": "Threats attacks and adversaries",
    "type": "mcq",
    "question": "Which of the following is an example of a network vulnerability?",
    "options": {
      "A": "Encrypting sensitive data",
      "B": "Running outdated and unpatched software",
      "C": "Using a strong password",
      "D": "Implementing a firewall"
    },
    "answer": "B",
    "explanation": "Outdated, unpatched software may contain known exploitable weaknesses. Encryption, strong authentication, and firewalls can reduce risk, though they must be configured and maintained properly."
  },
  {
    "number": 108,
    "chapter": 4,
    "chapterName": "Threats attacks and adversaries",
    "type": "mcq",
    "question": "Which of the following is NOT an essential security principle?",
    "options": {
      "A": "Complexity",
      "B": "Confidentiality",
      "C": "Availability",
      "D": "Integrity"
    },
    "answer": "A",
    "explanation": "The CIA triad consists of confidentiality, integrity, and availability. Complexity is not a member and can make systems harder to secure, although real security designs may contain necessary complexity."
  },
  {
    "number": 109,
    "chapter": 4,
    "chapterName": "Threats attacks and adversaries",
    "type": "mcq",
    "question": "Which of the following best describes the concept of defense in depth in cybersecurity?",
    "options": {
      "A": "Utilizing multiple layers of security controls to protect against different types of threats",
      "B": "Running regular vulnerability scans to maintain the integrity of the system",
      "C": "Implementing access controls to ensure availability of critical resources",
      "D": "Encrypting sensitive data to maintain confidentiality"
    },
    "answer": "A",
    "explanation": "Defense in depth uses complementary controls so a failure in one layer does not leave the entire system exposed. It includes people, process, and technology rather than relying on only encryption or one scan."
  },
  {
    "number": 110,
    "chapter": 4,
    "chapterName": "Threats attacks and adversaries",
    "type": "mcq",
    "question": "What is the general motivation behind an Advanced Persistent Threat (APT)?",
    "options": {
      "A": "Publicity",
      "B": "Random disruption",
      "C": "Financial gain",
      "D": "Revenge"
    },
    "answer": "C",
    "explanation": "Financial gain is a possible APT motive and the strongest listed choice. APT campaigns are defined by targeted, sustained access rather than by one universal motive. Espionage and sabotage are also common objectives, but they are not offered."
  },
  {
    "number": 111,
    "chapter": 4,
    "chapterName": "Threats attacks and adversaries",
    "type": "mcq",
    "question": "What is a vulnerability in the context of cybersecurity?",
    "options": {
      "A": "An advanced encryption algorithm",
      "B": "A software bug that causes system crashes",
      "C": "A weakness in a system that can be exploited by threats",
      "D": "A security measure that prevents unauthorized access"
    },
    "answer": "C",
    "explanation": "A vulnerability is a weakness that could be exploited to cause harm. A bug can be a vulnerability, but not every bug is exploitable and vulnerabilities also include configuration and process weaknesses."
  },
  {
    "number": 112,
    "chapter": 4,
    "chapterName": "Threats attacks and adversaries",
    "type": "mcq",
    "question": "What is an Advanced Persistent Threat (APT)?",
    "options": {
      "A": "A vulnerability in network communication protocols.",
      "B": "A cyberattack that compromises multiple devices simultaneously.",
      "C": "A sophisticated and targeted attack that aims to gain unauthorized access and maintain persistence over a long period.",
      "D": "A type of malware that spreads rapidly through a network."
    },
    "answer": "C",
    "explanation": "An APT is a sustained, targeted campaign that seeks persistent access. It is not defined by how many devices are compromised or by rapid self-propagation, which is associated with worms."
  },
  {
    "number": 113,
    "chapter": 4,
    "chapterName": "Threats attacks and adversaries",
    "type": "mcq",
    "question": "What is an insider threat?",
    "options": {
      "A": "A threat posed by an individual with authorized access to an organization's systems and data.",
      "B": "A vulnerability in an organization's network infrastructure.",
      "C": "The accidental disclosure of sensitive information.",
      "D": "A security breach caused by an external attacker."
    },
    "answer": "A",
    "explanation": "An insider threat arises from someone with authorized access, whether harm is deliberate or accidental. It may involve employees, contractors, or partners and is not limited to an outside attacker."
  },
  {
    "number": 114,
    "chapter": 4,
    "chapterName": "Threats attacks and adversaries",
    "type": "mcq",
    "question": "What is tailgating in the context of cybersecurity?",
    "options": {
      "A": "A type of phishing attack that targets specific individuals or organizations.",
      "B": "A physical attack where an unauthorized person gains entry to a restricted area by following closely behind an authorized person.",
      "C": "A form of social engineering attack that uses SMS or text messages to trick victims into revealing sensitive information.",
      "D": "A cyber attack where an attacker manipulates and deceives an individual to reveal sensitive information."
    },
    "answer": "B",
    "explanation": "Tailgating occurs when an unauthorized person follows an authorized entrant into a restricted area. It exploits physical access practices rather than a software vulnerability or text-message lure."
  },
  {
    "number": 115,
    "chapter": 4,
    "chapterName": "Threats attacks and adversaries",
    "type": "mcq",
    "question": "What is the primary characteristic of an Advanced Persistent Threat (APT) compared to traditional \nattacks?",
    "options": {
      "A": "APTs are easily detectable by conventional security measures",
      "B": "APTs involve persistent and prolonged attacks on specific targets",
      "C": "APTs are random and indiscriminate in their targets",
      "D": "APTs are primarily aimed at causing immediate damage to systems"
    },
    "answer": "B",
    "explanation": "Persistence and focused targeting distinguish an APT campaign. Such campaigns can attempt to remain unnoticed for long periods and are not necessarily designed for immediate disruption."
  },
  {
    "number": 116,
    "chapter": 4,
    "chapterName": "Threats attacks and adversaries",
    "type": "mcq",
    "question": "What is smishing?",
    "options": {
      "A": "A form of social engineering attack that uses SMS or text messages to trick victims into revealing sensitive information.",
      "B": "A physical attack where an unauthorized person gains entry to a restricted area by following closely behind an authorized person.",
      "C": "A type of phishing attack that targets specific individuals or organizations.",
      "D": "A cyber attack where an attacker manipulates and deceives an individual to reveal sensitive information."
    },
    "answer": "A",
    "explanation": "Smishing is phishing delivered through SMS or similar text messages. The message may request credentials, direct a victim to a malicious site, or trick the victim into installing software."
  },
  {
    "number": 117,
    "chapter": 4,
    "chapterName": "Threats attacks and adversaries",
    "type": "mcq",
    "question": "Which of the following best describes social engineering?",
    "options": {
      "A": "A method of manipulating individuals to disclose sensitive information",
      "B": "A type of malware attack",
      "C": "A physical security control",
      "D": "A network security protocol"
    },
    "answer": "A",
    "explanation": "Social engineering manipulates people into disclosing information or performing actions that benefit an attacker. It may use impersonation, urgency, authority, or trust and need not involve malware."
  },
  {
    "number": 118,
    "chapter": 4,
    "chapterName": "Threats attacks and adversaries",
    "type": "mcq",
    "question": "Which malicious activity is NOT typically associated with cyber attacks?",
    "options": {
      "A": "Phishing",
      "B": "Malware",
      "C": "Data encryption",
      "D": "Denial of Service (DoS)"
    },
    "answer": "C",
    "explanation": "Encryption is normally protective, unlike phishing, malware, and denial of service. Attackers can also misuse encryption in ransomware, so C is the best ordinary-use answer rather than a claim that encryption can never be part of an attack."
  },
  {
    "number": 119,
    "chapter": 4,
    "chapterName": "Threats attacks and adversaries",
    "type": "mcq",
    "question": "What is a man-in-the-middle attack?",
    "options": {
      "A": "An attack that intercepts and manipulates communication between two parties.",
      "B": "An attack that exploits vulnerabilities in a device's software.",
      "C": "An attack that targets Internet of Things devices.",
      "D": "An attack where an insider intentionally releases sensitive information."
    },
    "answer": "A",
    "explanation": "An on-path or man-in-the-middle attacker intercepts communication and may alter or relay it. Correctly validated authenticated TLS helps protect against this; encryption without trustworthy authentication can still be vulnerable."
  },
  {
    "number": 120,
    "chapter": 4,
    "chapterName": "Threats attacks and adversaries",
    "type": "mcq",
    "question": "Which of the following best describes an Advanced Persistent Threat (APT)?",
    "options": {
      "A": "An unintentional and harmless interaction with a computer system",
      "B": "A security incident caused by human error or negligence",
      "C": "A targeted cyber attack that aims to gain unauthorized access to sensitive information",
      "D": "A type of malware designed to disrupt computer networks"
    },
    "answer": "C",
    "explanation": "C is the closest option because an APT is targeted and seeks unauthorized access. The definition is incomplete without sustained persistence over time. Unintentional mistakes and generic disruptive malware are not equivalent to an APT campaign."
  },
  {
    "number": 121,
    "chapter": 4,
    "chapterName": "Threats attacks and adversaries",
    "type": "match",
    "question": "You need to diagram an intrusion event by using the Diamond Model. Match each event detail from the list on the left to the correct location in the diagram on the right.",
    "pairs": [
      {
        "left": "Adversary",
        "right": "Ransomware Group"
      },
      {
        "left": "Infrastructure",
        "right": "Email Server, Domain Name"
      },
      {
        "left": "Capability",
        "right": "Phishing Email, Malware"
      },
      {
        "left": "Victim",
        "right": "Customer and Product Databases"
      }
    ],
    "explanation": "The Diamond Model connects adversary, capability, infrastructure, and victim. The ransomware group is the adversary; phishing and malware are capabilities; the email server and domain support delivery; the customer and product databases are victim assets."
  },
  {
    "number": 122,
    "chapter": 4,
    "chapterName": "Threats attacks and adversaries",
    "type": "mcq",
    "question": "How do threat actors launch ransomware attacks on organizations?",
    "options": {
      "A": "They deface an organization's public-facing website.",
      "B": "They lock data and deny access to the data until they receive money.",
      "C": "They implant malware to collect data from the corporation's financial system.",
      "D": "They secretly spy on employees and collect employees\" personal information."
    },
    "answer": "B",
    "explanation": "Ransomware commonly encrypts or locks resources and demands payment; some campaigns also steal data and threaten disclosure. This describes its impact, not the initial delivery method, which can involve phishing or exploitation."
  },
  {
    "number": 123,
    "chapter": 4,
    "chapterName": "Threats attacks and adversaries",
    "type": "match",
    "question": "Match each scenario from the list on the left to the correct type of attacker on the right.",
    "pairs": [
      {
        "left": "Cyber criminal",
        "right": "Tries to profit from personal data gained by spamming companies or individuals"
      },
      {
        "left": "State-sponsored attacker",
        "right": "Works in conjunction with a government to promote its agenda"
      },
      {
        "left": "Insider threat",
        "right": "Works as a company contractor who installs malware on a server"
      },
      {
        "left": "Hacktivist",
        "right": "Interferes in a government election to promote a self-defined sense of justice"
      }
    ],
    "explanation": "Financially motivated cybercriminals seek profit, state-sponsored actors support state objectives, insiders abuse legitimate access, and hacktivists pursue ideological goals. These categories can overlap in real investigations; the scenario's strongest clue determines the classroom match."
  },
  {
    "number": 124,
    "chapter": 4,
    "chapterName": "Threats attacks and adversaries",
    "type": "mcq",
    "question": "An employee accidentally sends an email containing sensitive corporate information to an external \nemail address. Which type of threat does this scenario describe?",
    "options": {
      "A": "Insider",
      "B": "Logic bomb",
      "C": "Malware",
      "D": "Phishing"
    },
    "answer": "A",
    "explanation": "An employee's accidental disclosure is an unintentional insider incident because the person had legitimate access. Insider threats do not require malicious intent, and the scenario does not show phishing, a logic bomb, or malware."
  },
  {
    "number": 125,
    "chapter": 4,
    "chapterName": "Threats attacks and adversaries",
    "type": "mcq",
    "question": "A client cannot connect to the corporate web server. You discover a large number of half-open TCP \nconnections to the server. What should you do?",
    "options": {
      "A": "Take action to stop the TCP SYN flood attack.",
      "B": "Ignore the half-open connections because this is a normal part of the TCP three-way handshake",
      "C": "Flush the DNS cache information.",
      "D": "Change the connection protocol from HTTP to HTTPS."
    },
    "answer": "A",
    "explanation": "Large numbers of incomplete TCP handshakes suggest a SYN flood exhausting connection resources. Investigate and apply appropriate protections such as SYN cookies, rate limits, and upstream filtering; changing HTTP to HTTPS does not remove the flood."
  },
  {
    "number": 126,
    "chapter": 4,
    "chapterName": "Threats attacks and adversaries",
    "type": "mcq",
    "question": "The employees in the accounting department of a company receive an email about the latest federal \nregulations. The email contains a hyperlink to register for a webinar that provides the latest updates on \nfinancial security. The webinar is hosted by a government agency. As a security officer, you notice that the \nhyperlink points to an unknown party. Which type of cybersecurity threat should you investigate?",
    "options": {
      "A": "Spear phishing",
      "B": "Smishing",
      "C": "Ransomware",
      "D": "Vishing"
    },
    "answer": "A",
    "explanation": "The message targets a particular department with a relevant lure and a misleading registration link, making spear phishing the best description. Smishing uses text messages; vishing uses voice communication."
  },
  {
    "number": 127,
    "chapter": 4,
    "chapterName": "Threats attacks and adversaries",
    "type": "mcq",
    "question": "Which classification of security alert is the greatest threat to an organization because it represents \nundetected exploits?",
    "options": {
      "A": "False negative",
      "B": "False positive",
      "C": "True negative",
      "D": "True positive"
    },
    "answer": "A",
    "explanation": "A false negative means malicious activity occurred but the detector failed to flag it. False positives are benign events wrongly alerted on, while true positives and true negatives are correct classifications."
  },
  {
    "number": 128,
    "chapter": 4,
    "chapterName": "Threats attacks and adversaries",
    "type": "mcq",
    "question": "A corporation hires a group of experienced cyber criminals to create a prolonged and in-depth \npresence on the network of a competitor. This presence will allow the corporation to steal or sabotage. \nWhich type of attack does this scenario describe?",
    "options": {
      "A": "Ransomware",
      "B": "Man-in-the-middle",
      "C": "APT",
      "D": "DDoS"
    },
    "answer": "C",
    "explanation": "The attackers seek sustained access for theft or sabotage, matching an APT campaign. APT describes targeted persistence; ransomware, on-path interception, and DDoS describe different behaviors or effects."
  },
  {
    "number": 129,
    "chapter": 4,
    "chapterName": "Threats attacks and adversaries",
    "type": "mcq",
    "question": "Several employees complain that the company intranet site is no longer accepting their login \ninformation. You attempt to connect by using the URL and notice some misspellings on the site. When you \nconnect by using IP address the site functions normally. What should you do?",
    "options": {
      "A": "Verify the accuracy of the entry for the site in the local DNS server.",
      "B": "Take the company web portal offline immediately",
      "C": "Update the web server software to the latest version",
      "D": "Restore a backup copy of the authentication database."
    },
    "answer": "A",
    "explanation": "A name that resolves to a suspicious site while the expected server behaves normally suggests incorrect or poisoned DNS data. Check resolution and trusted DNS records first. Direct-IP testing can behave differently under HTTPS and virtual hosting, so it is a diagnostic clue rather than proof."
  },
  {
    "number": 130,
    "chapter": 4,
    "chapterName": "Threats attacks and adversaries",
    "type": "mcq",
    "question": "A security analyst discovers that a hacker was able to gain root access to an enterprise Linux server. \nThe hacker accessed the server as a guest, used a program to bypass the root password and then killed \nessential processes as the root user. Which type of endpoint attack is this?",
    "options": {
      "A": "Buffer overflow",
      "B": "DDoS",
      "C": "Privilege escalation",
      "D": "Brute force"
    },
    "answer": "C",
    "explanation": "The attacker moves from guest privileges to root privileges, which is privilege escalation. A buffer overflow might enable that change, but no overflow is established by the scenario; brute force and DDoS are not demonstrated."
  },
  {
    "number": 131,
    "chapter": 4,
    "chapterName": "Threats attacks and adversaries",
    "type": "mcq",
    "question": "Which activity by an adversary is an example of an exploit that is attempting to gain credentials?",
    "options": {
      "A": "Installing a backdoor in order to enable two-way communication with the device",
      "B": "Sending an email with a link to a fictitious web portal login page",
      "C": "Obtaining a directory listing of files located on the web database server",
      "D": "Executing a remote port scan of all of the enterprise-registered IP addresses"
    },
    "answer": "B",
    "explanation": "A fake login portal sent in a deceptive email attempts credential phishing. Reconnaissance and directory listing may gather information but do not directly solicit a user's authentication secret in this scenario."
  },
  {
    "number": 132,
    "chapter": 4,
    "chapterName": "Threats attacks and adversaries",
    "type": "mcq",
    "question": "Customers of an online shopping store are complaining that they cannot visit the website. As an IT \ntechnician, you restart the website. After 30 minutes, the website crashes again. You suspect that the \nwebsite has experiencing Which type of cybersecurity threat should you investigate?",
    "options": {
      "A": "Spear phishing",
      "B": "Ransomware",
      "C": "Denial of service",
      "D": "Social engineering"
    },
    "answer": "C",
    "explanation": "Repeated website unavailability can result from denial of service, but crashes can also come from faults or ordinary capacity problems. C is the most relevant listed threat to investigate; traffic, system resources, and logs are needed to confirm the cause."
  },
  {
    "number": 133,
    "chapter": 4,
    "chapterName": "Threats attacks and adversaries",
    "type": "mcq",
    "question": "A security administrator is implementing defense-in-depth. Which set of solutions applies protections \nacross each layer of the defense-in-depth approach?",
    "options": {
      "A": "Strong passwords, access controls, MFA, Identity and access management (IAM)",
      "B": "Identity and access management (IAM), encryption, IPS/IDS, and endpoint detection and response (EDR) solutions",
      "C": "IPS/IDS, endpoint detection and response (EDR) solutions, strong passwords, firewall",
      "D": "IPS/IDS, antivirus/anti-malware, firewall, and endpoint detection and response (EDR) solutions"
    },
    "answer": "B",
    "explanation": "Option B spans distinct security layers: identity and access (IAM), data protection (encryption), network perimeter (IPS/IDS), and host endpoint (EDR). Option A covers only identity and access controls, Option C omits dedicated data-layer encryption, and Option D covers only network and endpoint controls. 05 Endpoint tools and troubleshooting"
  },
  {
    "number": 134,
    "chapter": 5,
    "chapterName": "Endpoint tools and troubleshooting",
    "type": "mcq",
    "question": "How does sandboxing help with the analysis of malware?",
    "options": {
      "A": "It allows suspicious application to run in a safe and isolated testing environment",
      "B": "It specifies the applications that are authorized for use on the network",
      "C": "it restricts traffic from passing from one network to another",
      "D": "it defines the suspicious or malicious applications that should de blocked"
    },
    "answer": "A",
    "explanation": "A sandbox runs suspicious code in a controlled, isolated environment so its behavior can be observed. It reduces exposure but does not guarantee perfect containment or detection; allowlisting and network filtering are separate controls."
  },
  {
    "number": 135,
    "chapter": 5,
    "chapterName": "Endpoint tools and troubleshooting",
    "type": "mcq",
    "question": "Why is it necessary to update firmware to the latest version?",
    "options": {
      "A": "To patch firmware in the kernel of the operating system",
      "B": "To support the latest operating systems and applications",
      "C": "To correct security holes and weaknesses",
      "D": "To explore new hardware features"
    },
    "answer": "C",
    "explanation": "Firmware updates can fix vulnerabilities in device code. Updates may also improve compatibility and features, but correcting known security weaknesses is the security reason emphasized here; firmware is not simply the operating-system kernel."
  },
  {
    "number": 136,
    "chapter": 5,
    "chapterName": "Endpoint tools and troubleshooting",
    "type": "mcq",
    "question": "Which Windows app is a command line interface that includes a sophisticated scripting language used \nto automate windows tasks?",
    "options": {
      "A": "PowerShell",
      "B": "Vim",
      "C": "Microsoft Management Console",
      "D": "MS.DOS"
    },
    "answer": "A",
    "explanation": "PowerShell is a command shell and scripting environment used to automate Windows administration. MMC hosts graphical management tools, Vim is a text editor, and MS-DOS is not the modern Windows automation environment described."
  },
  {
    "number": 137,
    "chapter": 5,
    "chapterName": "Endpoint tools and troubleshooting",
    "type": "mcq",
    "question": "A contractor is building a new home for a client. The client decides to install several IoT device. What \nshould the client do to ensure that the smart home is less vulnerable to attacks?",
    "options": {
      "A": "Buy IoT devices with the highest radio frequency for connecting to WiFi.",
      "B": "Enable the SSID broadcast feature on the wireless router.",
      "C": "Connect the IoT devices to different wireless APs.",
      "D": "Update the firmware on the loT devices regularly"
    },
    "answer": "D",
    "explanation": "Firmware updates address known IoT vulnerabilities when supported by the vendor. Merely using another access point does not guarantee isolation; segmentation, unique credentials, and disabling unnecessary access provide additional protection."
  },
  {
    "number": 138,
    "chapter": 5,
    "chapterName": "Endpoint tools and troubleshooting",
    "type": "match",
    "question": "You are using a Linux workstation to gather information that will assist in uncovering vulnerabilities on the local LAN",
    "pairs": [
      {
        "left": "tcpdump",
        "right": "Captures IP packets in a .pcap file for later analysis"
      },
      {
        "left": "nmap",
        "right": "Scans a domain or network to identify devices and open ports"
      },
      {
        "left": "netstat -a",
        "right": "Lists all current TCP and UDP connections on the local system"
      },
      {
        "left": "nslookup",
        "right": "Provides DNS information including IP address to domain name mapping"
      }
    ],
    "explanation": "tcpdump captures packets; nmap discovers hosts and services; netstat -a lists active connections and listening sockets; nslookup queries DNS. The connection-list wording is incomplete because netstat -a also includes listeners. Reverse DNS can map an IP address to a name when a suitable PTR record exists."
  },
  {
    "number": 139,
    "chapter": 5,
    "chapterName": "Endpoint tools and troubleshooting",
    "type": "mcq",
    "question": "You are reviewing the Application log on a Windows computer. You see an event with an error-level \nmessage as shown. What can you determine about the application that generated the event message?",
    "options": {
      "A": "The application experienced a significant problem that caused it to fail.",
      "B": "The application recovered from an event without loss of functionality.",
      "C": "The application is currently running much slower than expected",
      "D": "The application loaded and ran successfully without issues"
    },
    "answer": "A",
    "explanation": "An Error event indicates a significant problem affecting an application operation. A is the closest listed description, but severity alone does not prove that the entire application crashed or terminated. Read the event ID, message, and surrounding evidence before determining impact."
  },
  {
    "number": 140,
    "chapter": 5,
    "chapterName": "Endpoint tools and troubleshooting",
    "type": "mcq",
    "question": "A system on your network is experiencing slower than usual response times. In order to gather \ninformation about the status of the system, you issue the netstat -l command to display all of the TCP ports \nthat are in the listing state. What does the Listening state indicate about these ports?",
    "options": {
      "A": "The state of the connection on the ports is unknown.",
      "B": "The remote end disconnected and the ports are closing.",
      "C": "The ports are open on the system and are waiting for connections.",
      "D": "The ports are actively connected to another system or process."
    },
    "answer": "C",
    "explanation": "A listening socket is waiting for incoming connections rather than already exchanging data with another system. On Linux, netstat -l shows listening sockets and is not restricted to TCP; adding -t selects TCP. The printed word listing should be read as listening in this context."
  },
  {
    "number": 141,
    "chapter": 5,
    "chapterName": "Endpoint tools and troubleshooting",
    "type": "mcq",
    "question": "What enables the network security team to keep track of the operating system version, security \nupdates, and patches on end user's devices?",
    "options": {
      "A": "Business continuity planning",
      "B": "Asset management",
      "C": "Incident management",
      "D": "Security policies and procedures"
    },
    "answer": "B",
    "explanation": "Asset management maintains an inventory of devices, software versions, ownership, and patch status. Reliable inventory helps identify vulnerable systems; incident management and continuity planning use that information for different purposes."
  },
  {
    "number": 142,
    "chapter": 5,
    "chapterName": "Endpoint tools and troubleshooting",
    "type": "mcq",
    "question": "You are security technician. You just completed a full scan of a Windows 10 PC. Where should you go \nto view the scan result?",
    "options": {
      "A": "Windows Task Manager",
      "B": "Windows System Logs",
      "C": "Windows Application Logs",
      "D": "Windows Security"
    },
    "answer": "D",
    "explanation": "Windows Security shows Microsoft Defender scan status and protection history. Task Manager shows running processes and resource use; general application or system logs are not the primary user interface for reviewing a Defender scan."
  },
  {
    "number": 143,
    "chapter": 5,
    "chapterName": "Endpoint tools and troubleshooting",
    "type": "multichoice",
    "question": "Several staff members are experiencing unexplained computer crashes and many unwanted pop-up \nmessages. Which two actions should you take immediately to address the problem without impacting \ndata? ( choose 2)",
    "options": {
      "A": "Reinstall Windows on the affected workstations",
      "B": "Deploy a policy to install and automatically update antivirus and anti-malware software.",
      "C": "Scan affected workstations and remove malware.",
      "D": "Configure the network firewall to block malware from entering the internal network."
    },
    "answer": [
      "B",
      "C"
    ],
    "explanation": "Updating anti-malware protection and scanning affected hosts address suspected infection without immediately erasing user data. Isolate affected devices when needed and preserve evidence; reinstallation can be justified later but is not the least disruptive first choice."
  },
  {
    "number": 144,
    "chapter": 5,
    "chapterName": "Endpoint tools and troubleshooting",
    "type": "mcq",
    "question": "A cybersecurity analyst is investigating an unknown executable file discovered on a Linux desktop \ncomputer. The analyst enters the following command in the terminal ls -l. What is the purpose of this \ncommand?",
    "options": {
      "A": "To display the content of a text file",
      "B": "To open a text editor",
      "C": "To display the file permission and ownership of the executable file",
      "D": "To navigate to the folder that is passed as an argument to the command."
    },
    "answer": "C",
    "explanation": "ls -l displays a long listing with file type, permissions, owner, group, size, and timestamps. It does not execute the file, display its contents, open an editor, or change the current directory."
  },
  {
    "number": 145,
    "chapter": 5,
    "chapterName": "Endpoint tools and troubleshooting",
    "type": "mcq",
    "question": "After an administrator installs an operating system update on a laptop, the laptop user can no longer \nprint to their wireless printer. What should solve the issue?",
    "options": {
      "A": "Check for patches for wireless printers.",
      "B": "Reinstall the same service pack.",
      "C": "Install a new device driver for the wireless printer",
      "D": "Update the firmware on the laptop"
    },
    "answer": "C",
    "explanation": "An operating-system update can make an existing printer driver incompatible. Installing a supported current driver addresses that likely software-interface problem; firmware or network checks may still be needed if the symptom persists."
  },
  {
    "number": 146,
    "chapter": 5,
    "chapterName": "Endpoint tools and troubleshooting",
    "type": "match",
    "question": "Match each windows host log type from the list on the left to the correct description on the right.",
    "pairs": [
      {
        "left": "Application logs",
        "right": "Contain events that are received from programs running on the device"
      },
      {
        "left": "Setup logs",
        "right": "Record information about software installation and operating system updates"
      },
      {
        "left": "System logs",
        "right": "List events generated by the operation of hardware, drivers, and processes"
      },
      {
        "left": "Security logs",
        "right": "Record the success or failure of audit policy events"
      }
    ],
    "explanation": "Application logs contain program events; Setup logs concern installation and setup; System logs concern operating-system components, drivers, and services; Security logs record audited security events. Match by the event type rather than assuming the supplied row alignment is an answer key. 06 Vulnerability assessment and risk"
  },
  {
    "number": 147,
    "chapter": 6,
    "chapterName": "Vulnerability assessment and risk",
    "type": "mcq",
    "question": "What is the primary purpose of running a vulnerability scan on your network?",
    "options": {
      "A": "to automatically prioritize security weaknesses for immediate remediation",
      "B": "to correlate event logs on multiple servers in order to generate intrusion alerts.",
      "C": "To identify and document the locations of customer and financial databases",
      "D": "To determine whether systems are subject to CVEs that could be exploited by adversaries"
    },
    "answer": "D",
    "explanation": "A vulnerability scan identifies potential weaknesses, including applicable known CVEs and configuration problems. Findings must be validated and prioritized; a scan does not automatically prove successful exploitation or replace an authorized penetration test."
  },
  {
    "number": 148,
    "chapter": 6,
    "chapterName": "Vulnerability assessment and risk",
    "type": "multichoice",
    "question": "You are collecting data after a suspected intrusion on the local LAN. You need to capture incoming IP \npackets to a file for an investigator to analyze. Which two tools should you use? (Choose 2.)",
    "options": {
      "A": "Nmap",
      "B": "Wireshark",
      "C": "netstat",
      "D": "tcpdump"
    },
    "answer": [
      "B",
      "D"
    ],
    "explanation": "Wireshark and tcpdump capture packets and can save them for later analysis. Nmap primarily discovers hosts and services; netstat displays local connection information rather than recording packet contents."
  },
  {
    "number": 149,
    "chapter": 6,
    "chapterName": "Vulnerability assessment and risk",
    "type": "mcq",
    "question": "You are going to perform a penetration test on a company LAN. As part of your preparation, you access \nthe company's websites, view webpage source code, and run internet searches to uncover domain \ninformation. You also use social media to gather details about the company and its employees.",
    "options": {
      "A": "Offline",
      "B": "Active",
      "C": "Invasive",
      "D": "Passive"
    },
    "answer": "D",
    "explanation": "Public-source research, social-media review, and domain-information gathering are commonly classified as passive reconnaissance. Directly retrieving pages from the target server creates contact and may be treated as active interaction under stricter definitions. The overall scenario is intended to illustrate passive information gathering."
  },
  {
    "number": 150,
    "chapter": 6,
    "chapterName": "Vulnerability assessment and risk",
    "type": "multichoice",
    "question": "Which two basic metrics should be taken into consideration when assessing a severity to a \nvulnerability during an assessment? (choose 2)",
    "options": {
      "A": "The age of the hardware running the software that contains the vulnerability",
      "B": "The likelihood that an adversary can and will exploit the vulnerability",
      "C": "The time involved in choosing replacement software to replace older systems",
      "D": "The impacts that an exploit of the vulnerability will have on the organization"
    },
    "answer": [
      "B",
      "D"
    ],
    "explanation": "Likelihood and organizational impact are core risk-assessment considerations. They inform prioritization alongside technical severity and exposure; hardware age or replacement effort alone does not establish how serious a weakness is."
  },
  {
    "number": 151,
    "chapter": 6,
    "chapterName": "Vulnerability assessment and risk",
    "type": "order",
    "question": "You need to manage security risks at your company. In which order should you complete the actions?",
    "items": [
      "Identify the risks",
      "Prioritize the risks",
      "Implement a response",
      "Monitor results"
    ],
    "explanation": "First identify risks, then evaluate and prioritize them, implement appropriate treatment, and monitor the result. Monitoring can reveal changing conditions that require another assessment, so risk management is iterative."
  },
  {
    "number": 152,
    "chapter": 6,
    "chapterName": "Vulnerability assessment and risk",
    "type": "multichoice",
    "question": "Your manager asks you to review the output of some vulnerability scans and report anything that may \nrequire escalation. Which two findings should you report for further investigation as potential security \nvulnerabilities? (Choose 2.)",
    "options": {
      "A": "Encrypted passwords",
      "B": "Disabled firewalls",
      "C": "Open ports",
      "D": "SSH packets"
    },
    "answer": [
      "B",
      "C"
    ],
    "explanation": "A disabled firewall and unexpected open ports merit investigation. An open port is not automatically a vulnerability: establish whether the service is necessary, authorized, patched, and exposed appropriately before escalating its risk."
  },
  {
    "number": 153,
    "chapter": 6,
    "chapterName": "Vulnerability assessment and risk",
    "type": "mcq",
    "question": "You notice that a new CVE has been shared to an email group that you belong to. What should you do \nfirst with the CVE?",
    "options": {
      "A": "Record the CVE as part of the disaster recovery plan.",
      "B": "Research measures to prevent the CVE from attacking the network.",
      "C": "Add the CVE to the firewall rules for your organization.",
      "D": "Look up details of the vulnerability to determine whether it applies to your network"
    },
    "answer": "D",
    "explanation": "A CVE identifier refers to a documented vulnerability. First compare affected products, versions, and conditions with your inventory; only then choose relevant mitigation. The CVE itself is not malware that can be blocked as a firewall rule."
  },
  {
    "number": 154,
    "chapter": 6,
    "chapterName": "Vulnerability assessment and risk",
    "type": "multichoice",
    "question": "Your supervisor suspects that someone is attempting to gain access to a Windows computer by \nguessing user account IDs and passwords. The supervisor asks you to use the Windows Event Viewer \nsecurity logs to verify the attempts. Which two audit policy events provide information to determine \nwhether someone is using invalid credentials to attempt to log in to the computer? (Choose 2.)",
    "options": {
      "A": "Object access failure",
      "B": "Account lockout success",
      "C": "Account logon failure",
      "D": "Account logoff success"
    },
    "answer": [
      "B",
      "C"
    ],
    "explanation": "Failed logon or credential-validation events and account-lockout evidence help identify password guessing. The phrase Account lockout success is best interpreted as a successful audit record of a lockout, such as event 4740, not a successful user login. Inspect failed logon event 4625 and its details; an object-access failure alone does not establish invalid login credentials."
  },
  {
    "number": 155,
    "chapter": 6,
    "chapterName": "Vulnerability assessment and risk",
    "type": "mcq",
    "question": "Your supervisor tells you that you will participate in a CVSS assessment. What will you be doing?",
    "options": {
      "A": "Performing penetration tests on internal network devices and end system",
      "B": "Interviewing users to determine their level of cybersecurity awareness",
      "C": "Evaluating end system security and scoring software vulnerabilities",
      "D": "Analyzing host logs to identify abnormal activities"
    },
    "answer": "C",
    "explanation": "CVSS provides a standardized way to describe and score vulnerability severity. It does not perform a penetration test or measure awareness, and its score is an input to risk prioritization rather than a complete organizational risk assessment."
  },
  {
    "number": 156,
    "chapter": 6,
    "chapterName": "Vulnerability assessment and risk",
    "type": "mcq",
    "question": "While conducting a risk evaluation at your company, you identify risks that are related to the web \nserver located in the office. The risks include hardware and software failure as well as web service \ninterruption caused by cyber attacks. You recommend purchasing insurance and hiring another \norganization to maintain the web server to help mitigate the risks.",
    "options": {
      "A": "Risk reduction",
      "B": "Risk avoidance",
      "C": "Risk acceptance",
      "D": "Risk transfer"
    },
    "answer": "D",
    "explanation": "Insurance transfers some financial consequences to an insurer. Outsourcing can share or transfer responsibilities, but the organization retains accountability and residual risk; transfer does not remove the underlying threat."
  },
  {
    "number": 157,
    "chapter": 6,
    "chapterName": "Vulnerability assessment and risk",
    "type": "mcq",
    "question": "You are working with the senior administration team to identify potential risks. Which phase of risk \nmanagement are you in?",
    "options": {
      "A": "Choosing risk strategies",
      "B": "Measuring residual risk",
      "C": "Mitigating risks",
      "D": "Determining a risk profile"
    },
    "answer": "D",
    "explanation": "Identifying relevant threats, assets, and exposures contributes to building a risk profile. Selecting treatments and measuring residual risk follow assessment; the source's named phase is broad rather than a universal standard label."
  },
  {
    "number": 158,
    "chapter": 6,
    "chapterName": "Vulnerability assessment and risk",
    "type": "match",
    "question": "Match each cybersecurity tool from the list on the left to the correct location on the Vulnerability Management Process diagram on the right",
    "pairs": [
      {
        "left": "Discover",
        "right": "Nmap; Nessus Scanner"
      },
      {
        "left": "Prioritize",
        "right": "CVSS"
      },
      {
        "left": "Remediate",
        "right": "Windows Auto Update; Patch Management Software"
      }
    ],
    "explanation": "Nmap helps discover hosts and services, Nessus scans for vulnerabilities, CVSS supports severity prioritization, and update or patch tools remediate weaknesses. CVSS is a scoring system rather than a scanner, and business context must supplement it."
  },
  {
    "number": 159,
    "chapter": 6,
    "chapterName": "Vulnerability assessment and risk",
    "type": "mcq",
    "question": "Your organization's SIEM system alerts you that users are connecting to an unusual URL. You need to \ndetermine whether the URL is malicious and what type of threat it represents. What should you do?",
    "options": {
      "A": "Submit the URL to a threat intelligence portal for analysis",
      "B": "Ask users why they visited the website.",
      "C": "Visit the URL to determine whether the websites is legitimate",
      "D": "Block the URL by placing it on the network block list."
    },
    "answer": "A",
    "explanation": "A trusted threat-intelligence service can help analyze a suspicious URL without visiting it directly from a normal workstation. Avoid submitting URLs containing secrets or sensitive internal data to public services; use approved internal analysis when appropriate."
  },
  {
    "number": 160,
    "chapter": 6,
    "chapterName": "Vulnerability assessment and risk",
    "type": "match",
    "question": "Match each cybersecurity term from the list on the left to the correct description on the right.",
    "pairs": [
      {
        "left": "Asset",
        "right": "People, property, or data"
      },
      {
        "left": "Threat",
        "right": "An action that causes a negative impact"
      },
      {
        "left": "Risk",
        "right": "The potential for loss, damage, or destruction"
      },
      {
        "left": "Vulnerability",
        "right": "A weakness that potentially exposes organizations to cyber attacks"
      }
    ],
    "explanation": "These are the intended matches for asset, threat, risk, and vulnerability. More precisely, a threat is a potential cause of harm rather than only an action that already caused damage. Risk assessment also considers likelihood and impact; a vulnerability is the exploitable weakness."
  },
  {
    "number": 161,
    "chapter": 6,
    "chapterName": "Vulnerability assessment and risk",
    "type": "mcq",
    "question": "Which activity is an example of active reconnaissance performed during a penetration test?",
    "options": {
      "A": "Using a browser to view the HTTP source code of company webpages",
      "B": "Gathering employee information from available web directories and social media",
      "C": "Performing an Nmap port scan on the LAN to determine types of connected devices and open ports",
      "D": "Searching the WHOIS database for the owner and technical contact information for a domain."
    },
    "answer": "C",
    "explanation": "An Nmap port scan sends probes to target systems, making it active reconnaissance. WHOIS and social- media research use public information; directly retrieving a target web page also makes contact, so source context matters."
  },
  {
    "number": 162,
    "chapter": 6,
    "chapterName": "Vulnerability assessment and risk",
    "type": "multichoice",
    "question": "Which two basic metrics should be taken into consideration when assigning a severity to a \nvulnerability during an assessment? (Choose 2)",
    "options": {
      "A": "The likelihood that an adversary can and will exploit the vulnerability",
      "B": "The impacts that an exploit of the vulnerability will have on the organization",
      "C": "The time involved n choosing replacement software to replace older systems",
      "D": "The age of the hardware running the software that contains the vulnerability"
    },
    "answer": [
      "A",
      "B"
    ],
    "explanation": "Likelihood of exploitation and organizational impact guide risk prioritization. Technical severity, exposure, and asset importance also matter; hardware age and replacement planning alone cannot determine the risk posed by the weakness."
  },
  {
    "number": 163,
    "chapter": 6,
    "chapterName": "Vulnerability assessment and risk",
    "type": "multichoice",
    "question": "What are two disadvantages of public vulnerability databases? (choose 2)",
    "options": {
      "A": "Threat actors can access the databases to learn how to vary their threats to avoid detection.",
      "B": "Publicly available database are incompatible with most security platform",
      "C": "It can take a long time for reported vulnerabilities to be investigated and approved for addition to the databases",
      "D": "It is costly for intelligence analysts to document and submit newly discovered vulnerabilities."
    },
    "answer": [
      "A",
      "C"
    ],
    "explanation": "Public vulnerability details can help adversaries plan attacks or adapt techniques, while investigation and publication delays can leave databases incomplete. These are the intended trade-offs in A and C. Public databases also provide major defensive value; public access does not automatically defeat detection, and platform incompatibility is not universal."
  },
  {
    "number": 164,
    "chapter": 6,
    "chapterName": "Vulnerability assessment and risk",
    "type": "mcq",
    "question": "Which command displays both the configured DNS server information and the IP address resolution \nfor a URL?",
    "options": {
      "A": "Ping",
      "B": "Nslookup",
      "C": "Traceroute",
      "D": "Nmap"
    },
    "answer": "B",
    "explanation": "nslookup displays the DNS server used and DNS record results for a queried name. A hostname is queried rather than an entire URL containing a scheme or path. ping and traceroute perform different reachability and route diagnostics."
  },
  {
    "number": 165,
    "chapter": 6,
    "chapterName": "Vulnerability assessment and risk",
    "type": "multichoice",
    "question": "Your manager asks you to review the output of some vulnerability scans and report anything that \nmight require escalation. Which two findings should you report for further investigation as potential \nsecurity vulnerabilities? (Choose 2.)",
    "options": {
      "A": "Missing application patches",
      "B": "SSH packets",
      "C": "DNS packets with common domain names",
      "D": "Open ports"
    },
    "answer": [
      "A",
      "D"
    ],
    "explanation": "Missing application patches expose systems to known, exploitable vulnerabilities (CVEs), and unexpected open ports expand the network attack surface. Routine SSH traffic and standard DNS queries for common domain names represent normal network activity rather than vulnerability scan findings. 07 Incident response and recovery"
  },
  {
    "number": 166,
    "chapter": 7,
    "chapterName": "Incident response and recovery",
    "type": "mcq",
    "question": "Which of the following is true regarding the incident response process?",
    "options": {
      "A": "It is a reactive process that is only initiated after an incident has occurred.",
      "B": "It is a proactive process that focuses on preventing incidents from occurring.",
      "C": "It is an iterative process that involves continuous improvement based on lessons learned.",
      "D": "It is a one-time process that is only performed when an organization first establishes its security program."
    },
    "answer": "C",
    "explanation": "Incident response includes preparation, detection, response, recovery, and improvement. Lessons from incidents should improve controls and procedures, so it is a continuing activity rather than a one-time response."
  },
  {
    "number": 167,
    "chapter": 7,
    "chapterName": "Incident response and recovery",
    "type": "mcq",
    "question": "You need a software solution that performs the following tasks. \u25e6 Compiles network data \u25e6 Logs \ninformation from many sources \u25e6 Provides orchestration in the form of case management \u25e6 Automates \nincident response workflows What product should you use?",
    "options": {
      "A": "Snort",
      "B": "NextGen IPS",
      "C": "SIEM",
      "D": "SOAR"
    },
    "answer": "D",
    "explanation": "SOAR emphasizes orchestration, case management, and automated response playbooks. SIEM emphasizes collecting and correlating security events; modern platforms may combine capabilities, but the workflow-automation requirement makes SOAR the best fit."
  },
  {
    "number": 168,
    "chapter": 7,
    "chapterName": "Incident response and recovery",
    "type": "match",
    "question": "Match each worm mitigation step from the list on the left to the correct description on the right.",
    "pairs": [
      {
        "left": "Step 1, Containment",
        "right": "Contain the spread of the worm into and within your network; compartmentalize uninfected parts"
      },
      {
        "left": "Step 2, Inoculation",
        "right": "Start patching all systems and, if possible, scanning for vulnerable systems"
      },
      {
        "left": "Step 3, Quarantine",
        "right": "Track down each infected machine; disconnect, remove, or block infected machines"
      },
      {
        "left": "Step 4, Treatment",
        "right": "Clean and patch each infected system (may require complete core reinstallation)"
      }
    ],
    "explanation": "Containment limits spread; inoculation patches uninfected targets; quarantine isolates infected systems; treatment removes infection and restores trusted operation. These activities may overlap in real incidents rather than following a rigid one-time sequence."
  },
  {
    "number": 169,
    "chapter": 7,
    "chapterName": "Incident response and recovery",
    "type": "multichoice",
    "question": "You are reviewing your company's disaster recovery plan. Which two daily data backup actions should \nthe plan include? (Choose 2.)",
    "options": {
      "A": "Back up the data by using RAID on a local external hard drive with a secondary power source.",
      "B": "Back up the data to removable media and store it off-site.",
      "C": "Back up the data by using cloud services.",
      "D": "Back up each department's data to a separate local server."
    },
    "answer": [
      "B",
      "C"
    ],
    "explanation": "Off-site removable-media backups and appropriately secured cloud backups can retain recovery copies away from local disasters. RAID is redundancy, not a backup: it does not inherently protect against deletion, ransomware, or site loss. Separate local copies may help recovery but lack the off-site protection of B and C."
  },
  {
    "number": 170,
    "chapter": 7,
    "chapterName": "Incident response and recovery",
    "type": "match",
    "question": "Match each NIST Incident Response Lifecycle phase from the list on the left to the correct description on the right.",
    "pairs": [
      {
        "left": "Preparation",
        "right": "Establishes an incident response capability to ensure organizational assets are sufficiently secure"
      },
      {
        "left": "Detection and Analysis",
        "right": "Evaluates incident indicators to determine whether they are legitimate attacks and alerts the organization"
      },
      {
        "left": "Containment, Eradication, and Recovery",
        "right": "Mitigates the impact of the incident, eliminates threat components, and restores operations"
      },
      {
        "left": "Post-incident Activity",
        "right": "Reports the cause and cost of the incident and the steps to prevent future incidents (lessons learned)"
      }
    ],
    "explanation": "The four labels are the historical NIST SP 800-61 Rev. 2 lifecycle. Preserve them for older course material, but Rev. 3, published in 2025, aligns incident response with CSF 2.0 and supersedes Rev. 2."
  },
  {
    "number": 171,
    "chapter": 7,
    "chapterName": "Incident response and recovery",
    "type": "mcq",
    "question": "What is the main purpose of a disaster recovery plan as compared to a business continuity plan?",
    "options": {
      "A": "Limiting operational downtime",
      "B": "Allowing staff to continue to serve customers throughout a disaster",
      "C": "Keeping the business open in some capacity during a disaster",
      "D": "Restoring data access and an IT infrastructure as quickly as possible"
    },
    "answer": "D",
    "explanation": "Disaster recovery focuses on restoring IT systems and data after disruption. Business continuity covers maintaining critical business operations more broadly, potentially through alternate people, facilities, or manual procedures."
  },
  {
    "number": 172,
    "chapter": 7,
    "chapterName": "Incident response and recovery",
    "type": "classify",
    "question": "For each statement, select True if it is a common motivation to commit cyber attacks or False if it is not.",
    "categories": [
      "True",
      "False"
    ],
    "items": [
      {
        "text": "A person becomes disgruntled at work.",
        "category": "True"
      },
      {
        "text": "A person wants to protect personal data.",
        "category": "False"
      },
      {
        "text": "A person wants to advance a social agenda.",
        "category": "True"
      }
    ],
    "explanation": "Disgruntlement and ideological goals are recognized attacker motivations. Protecting one's own data through authorized defensive action is not itself a motive for an unauthorized attack. Motivation never establishes authorization to test another system."
  },
  {
    "number": 173,
    "chapter": 7,
    "chapterName": "Incident response and recovery",
    "type": "match",
    "question": "Match each NIST incident Response Lifecycle phase from the list on the left to the correct description on the right.",
    "pairs": [
      {
        "left": "Preparation",
        "right": "Establishes an incident response capability to ensure organizational assets are sufficiently secure"
      },
      {
        "left": "Detection and Analysis",
        "right": "Evaluates incident indicators to determine whether they are legitimate attacks and alerts the organization"
      },
      {
        "left": "Containment, Eradication, and Recovery",
        "right": "Mitigates the impact of the incident, eliminates threat components, and restores operations"
      },
      {
        "left": "Post-incident Activity",
        "right": "Reports the cause and cost of the incident and the steps to prevent future incidents (lessons learned)"
      }
    ],
    "explanation": "Preparation establishes readiness; detection and analysis identifies and validates incidents; containment, eradication, and recovery limits harm and restores service; post-incident work captures lessons. These are Rev. 2 historical labels."
  },
  {
    "number": 174,
    "chapter": 7,
    "chapterName": "Incident response and recovery",
    "type": "mcq",
    "question": "You are monitoring the syslog server and observe that the DNS server is sending messages with a \nWarning severity. What do these messages indicate about the operation of the DNS server?",
    "options": {
      "A": "The DNS server is unusable due to a severe malfunction and is shutting down",
      "B": "The server has a hardware error that does not require immediate attention",
      "C": "A condition exists that will cause errors in the future if the issue is not fixed.",
      "D": "An error condition is occurring that must be addressed immediately"
    },
    "answer": "C",
    "explanation": "Syslog Warning has severity 4 and indicates a condition requiring attention before it becomes more serious. C is the closest supplied choice, but a warning does not guarantee future errors. Error is severity 3 and Emergency is severity 0."
  },
  {
    "number": 175,
    "chapter": 7,
    "chapterName": "Incident response and recovery",
    "type": "match",
    "question": "Match each worm mitigation step from the list on the left to the correct description on the right.",
    "pairs": [
      {
        "left": "Treatment",
        "right": "Clean and patch infected system"
      },
      {
        "left": "Quarantine",
        "right": "Remove or block infected system from the network"
      },
      {
        "left": "Inoculation",
        "right": "Patch uninfected systems to deprive the worm of more available targets"
      },
      {
        "left": "Containment",
        "right": "Compartmentalize and segment the network to limit the spread of the worm to areas already infected"
      }
    ],
    "explanation": "Quarantine removes or blocks infected hosts; containment limits spread through segmentation; inoculation patches uninfected systems; treatment cleans and restores affected systems."
  },
  {
    "number": 176,
    "chapter": 7,
    "chapterName": "Incident response and recovery",
    "type": "match",
    "question": "Move the appropriate control measures from the list on the left to the correct descriptions on the right. You may use each control measure once, more than once or not at all. Note. You will receive partial for each correct answer.",
    "pairs": [
      {
        "left": "Detective measures",
        "right": "Discover unwanted event"
      },
      {
        "left": "Preventive measures",
        "right": "Avert the occurrence of an event"
      },
      {
        "left": "Corrective measures",
        "right": "Restore a system after an event"
      }
    ],
    "explanation": "Preventive controls aim to stop an event, detective controls identify it, and corrective controls restore or improve the affected system afterward. A control can serve more than one purpose depending on its implementation."
  },
  {
    "number": 177,
    "chapter": 7,
    "chapterName": "Incident response and recovery",
    "type": "multichoice",
    "question": "What are two natural disasters that would cause a company to implement a disaster recovery plan? \n(choose 2).",
    "options": {
      "A": "Hazardous material spills",
      "B": "Floods",
      "C": "Nuclear contamination",
      "D": "Volcanic eruptions"
    },
    "answer": [
      "B",
      "D"
    ],
    "explanation": "Floods and volcanic eruptions are natural hazards. Hazardous-material spills and nuclear contamination are normally treated as technological or human-caused hazards in this classification, though disasters can have cascading causes."
  },
  {
    "number": 178,
    "chapter": 7,
    "chapterName": "Incident response and recovery",
    "type": "mcq",
    "question": "You are a security analyst. You are reviewing output from the SIEM. You notice an alert concerning \nmalicious files detected by the IDS. After reviewing the user, device and posture information you determine \nthat it is a valid What should you do next?",
    "options": {
      "A": "Escalate the situation immediately",
      "B": "Log the alert and watch for a second occurrence",
      "C": "Prepare notes to present at the weekly cybersecurity team meeting",
      "D": "Update the documentation to include the new alert information"
    },
    "answer": "A",
    "explanation": "After validating a credible malicious-file alert, follow the response plan and promptly escalate to the authorized incident-response team. Delaying until a weekly meeting or waiting for another occurrence can allow further compromise."
  },
  {
    "number": 179,
    "chapter": 7,
    "chapterName": "Incident response and recovery",
    "type": "mcq",
    "question": "Review the following log:<br/><br/><pre style='background:#1e293b;color:#f8fafc;padding:12px;border-radius:8px;font-family:monospace;font-size:0.85rem;line-height:1.45;overflow-x:auto;'>2025-08-29 09:15:02 [INFO] Server startup initiated. OS: Ubuntu 22.04 LTS, Kernel: 5.15.0-78\\n2025-08-29 09:15:05 [INFO] Database connection established to db-prod-01 (192.168.10.15:5432)\\n2025-08-29 09:15:06 [WARN] High memory usage detected: 78% used\\n2025-08-29 09:15:08 [INFO] Web service listening on port 8080\\n2025-08-29 09:16:12 [ERROR] Failed login attempt for user 'admin' from IP 203.0.113.45\\n2025-08-29 09:16:14 [ERROR] Failed login attempt for user 'admin' from IP 203.0.113.45\\n2025-08-29 09:16:16 [ERROR] Failed login attempt for user 'admin' from IP 203.0.113.45\\n2025-08-29 09:16:20 [CRITICAL] Multiple failed login attempts detected - possible brute force attack\\n2025-08-29 09:16:25 [INFO] Security rule triggered: Blocking IP 203.0.113.45\\n2025-08-29 09:17:02 [WARN] Disk space usage at 92% on /var\\n2025-08-29 09:18:45 [ERROR] Database query timeout on db-prod-01 - query exceeded 30s\\n2025-08-29 09:18:47 [INFO] Automatic database failover to db-backup-01 (192.168.10.16:5432)\\n2025-08-29 09:19:10 [INFO] System health check: CPU 45%, Memory 82%, Disk 92%</pre><br/>Which description of events explains the unusual anomalies and their potential consequences?",
    "options": {
      "A": "The system could not start because of low memory, then blocked an IP address for unrelated reasons, and finally shut down due to disk failure.",
      "B": "The system experienced normal startup, then a scheduled security scan blocked an IP, and later a planned database migration caused a failover.",
      "C": "The system experienced and blocked a brute force login attempt, then encountered a high disk usage and a database slowdown which ultimately triggered a failover event.",
      "D": "The database server crashed first, resulting in login failures and high disk usage, which led to a brute force detection and IP block."
    },
    "answer": "C",
    "explanation": "The log sequence shows repeated failed admin login attempts from 203.0.113.45 that triggered a brute force block at 09:16:25, followed by a high disk usage warning (92% on /var) at 09:17:02, a database query timeout on db-prod-01 at 09:18:45, and an automatic failover to db-backup-01 at 09:18:47."
  }
];

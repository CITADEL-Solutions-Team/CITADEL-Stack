import type { Service } from "@/views/Services/Service";

export const personalPCServices: Service[] = [
  {
    id: "new-pc-setup-personal",
    name: "New PC Setup",
    category: "PCServices",
    audience: "Personal",
    group: "Setup & Configuration",
    price: "$99 - $149",
    description: "Getting a new machine set up right the first time saves you from digging through settings menus for a week.",
    features: [
      "Unboxing, account setup, and OS updates",
      "Essential software install (browser, office suite, antivirus)",
      "Printer, peripheral, and network connection",
      "Old PC data transfer included"
    ],
    tags: ["new pc", "setup", "data transfer"]
  },
  {
    id: "operating-system-install-reinstall-personal",
    name: "Operating System Install & Reinstall",
    category: "PCServices",
    audience: "Personal",
    group: "Setup & Configuration",
    price: "$89 - $149",
    description: "A clean install clears out the clutter and instability that builds up over years of everyday use.",
    features: [
      "Clean install or repair install",
      "Driver installation for all hardware",
      "Data backup beforehand (if accessible)",
      "Software reinstallation assistance"
    ],
    tags: ["os install", "reinstall", "drivers"]
  },
  {
    id: "network-wifi-setup-personal",
    name: "Network & Wi-Fi Setup",
    category: "PCServices",
    audience: "Personal",
    group: "Setup & Configuration",
    price: "$99 - $179",
    description: "A poorly configured network means slow speeds and dead zones that are usually a quick fix once someone knows where to look.",
    features: [
      "Router/modem configuration and Wi-Fi optimization",
      "Wired network setup for multiple devices",
      "Guest network and parental controls",
      "VPN configuration"
    ],
    tags: ["network", "wifi", "router", "vpn"]
  },
  {
    id: "smart-home-iot-device-setup-personal",
    name: "Smart Home & IoT Device Setup",
    category: "PCServices",
    audience: "Personal",
    group: "Setup & Configuration",
    price: "$79 - $149 (up to 5 devices) + $15 - $25/additional device",
    description: "Getting every device properly paired and updated the first time means fewer app crashes and connection drops down the road.",
    features: [
      "Device pairing and Wi-Fi network integration",
      "Companion app setup and account configuration",
      "Naming, room assignment, and grouping for voice assistants",
      "Automation/routine setup (e.g., schedules, triggers, scenes)",
      "Firmware update check during setup",
      "Basic troubleshooting if device fails to connect"
    ],
    tags: ["smart home", "iot", "automation"]
  },
  {
    id: "pc-physical-cleaning-dust-removal-personal",
    name: "PC Physical Cleaning & Dust Removal",
    category: "PCServices",
    audience: "Personal",
    group: "Cleaning & Maintenance",
    price: "$59 - $99",
    description: "Dust buildup is one of the leading causes of overheating, and overheating is one of the leading causes of hardware failure.",
    features: [
      "Full interior cleaning",
      "Dust filter cleaning and fan inspection",
      "Thermal paste check and reapplication if degraded",
      "Cable management tidy-up for improved airflow",
      "Exterior cleaning and sanitizing"
    ],
    tags: ["cleaning", "dust removal", "thermal paste"]
  },
  {
    id: "software-cleanup-performance-tune-up-personal",
    name: "Software Cleanup & Performance Tune-up",
    category: "PCServices",
    audience: "Personal",
    group: "Cleaning & Maintenance",
    price: "$79 - $129",
    description: "Years of installed programs and startup clutter are usually why a computer that used to feel fast now feels sluggish.",
    features: [
      "Remove bloatware, unused programs, and startup clutter",
      "Clear temp files, cache, and disk junk",
      "Disk optimization",
      "Update drivers and OS patches",
      "Before/after performance report"
    ],
    tags: ["performance", "cleanup", "tune-up"]
  },
  {
    id: "scheduled-maintenance-plan-personal",
    name: "Scheduled Maintenance Plan",
    category: "PCServices",
    audience: "Personal",
    group: "Cleaning & Maintenance",
    price: "$15 - $25/mo (or $180 - $240/yr)",
    description: "Regular upkeep catches small issues before they turn into an expensive repair or a lost weekend.",
    features: [
      "Quarterly physical cleaning + software tune-up bundled",
      "Priority scheduling ahead of one-off customers",
      "Discounted diagnostic/repair rates for members",
      "Automatic reminder when service is due"
    ],
    tags: ["maintenance plan", "membership", "quarterly"]
  },
  {
    id: "bios-configuration-update-personal",
    name: "BIOS Configuration & Update",
    category: "PCServices",
    audience: "Personal",
    group: "BIOS & Firmware",
    price: "$59 - $99",
    description: "Outdated firmware can cause boot failures and security gaps that no amount of software fixing will solve.",
    features: [
      "Safe BIOS/UEFI firmware updates",
      "Boot order, secure boot, and virtualization settings",
      "Fan curve and basic thermal tuning",
      "Troubleshooting BIOS-level boot failures"
    ],
    tags: ["bios", "uefi", "firmware"]
  },
  {
    id: "overclocking-performance-tuning-personal",
    name: "Overclocking & Performance Tuning",
    category: "PCServices",
    audience: "Personal",
    group: "BIOS & Firmware",
    price: "$89 - $149",
    description: "Pushing a system past stock settings without proper testing risks instability or damage — done right, it's free performance.",
    features: [
      "CPU/GPU/RAM overclock within safe thermal limits",
      "Stability and stress testing",
      "Voltage and temperature monitoring setup",
      "Rollback plan if instability occurs"
    ],
    tags: ["overclocking", "performance tuning", "stress testing"]
  },
  {
    id: "hardware-troubleshooting-diagnosis-personal",
    name: "Hardware Troubleshooting & Diagnosis",
    category: "PCServices",
    audience: "Personal",
    group: "Diagnostics & Troubleshooting",
    price: "$49 - $79 (often credited toward repair)",
    description: "Guessing at a hardware problem wastes money on parts that were never the issue; proper diagnosis finds it the first time.",
    features: [
      "Crash/freeze/blue screen diagnosis",
      "Component-level testing",
      "Stress testing to reproduce intermittent issues",
      "Boot failure / POST error diagnosis",
      "Written report with repair recommendations"
    ],
    tags: ["diagnostics", "troubleshooting", "hardware"]
  },
  {
    id: "virus-malware-removal-personal",
    name: "Virus & Malware Removal",
    category: "PCServices",
    audience: "Personal",
    group: "Diagnostics & Troubleshooting",
    price: "$99 - $179",
    description: "An infected PC can quietly steal passwords and files long before you notice anything's wrong.",
    features: [
      "Full system scan and infection removal",
      "Browser hijacker and adware cleanup",
      "Rootkit/ransomware assessment",
      "Security software installation and configuration",
      "Follow-up scan to confirm system is clean"
    ],
    tags: ["virus removal", "malware", "security"]
  },
  {
    id: "data-recovery-personal",
    name: "Data Recovery",
    category: "PCServices",
    audience: "Personal",
    group: "Diagnostics & Troubleshooting",
    price: "$89 - $250 (pay only if recoverable; logical/software recovery only)",
    description: "A failed drive doesn't have to mean lost photos, documents, or years of work, but time matters once it happens.",
    features: [
      "Recovery from failed, corrupted, or accidentally formatted drives",
      "Free evaluation — pay only if data is recoverable",
      "Secure handling of personal/business data",
      "Recovered data delivered on external media"
    ],
    tags: ["data recovery", "failed drive"]
  },
  {
    id: "custom-pc-build-service-personal",
    name: "Custom PC Build Service",
    category: "PCServices",
    audience: "Personal",
    group: "Builds & Upgrades",
    price: "$99 - $249 (parts billed separately)",
    description: "A build assembled by someone who's done it hundreds of times means fewer compatibility surprises and better airflow from day one.",
    features: [
      "Full assembly from customer- or shop-sourced parts",
      "Cable management and airflow optimization",
      "BIOS setup, OS install, and driver installation",
      "Burn-in stress test before delivery",
      "30-day post-build support included"
    ],
    tags: ["pc build", "custom build", "assembly"]
  },
  {
    id: "build-advising-parts-consultation-personal",
    name: "Build Advising & Parts Consultation",
    category: "PCServices",
    audience: "Personal",
    group: "Builds & Upgrades",
    price: "$39 - $79",
    description: "The wrong part choice can mean a system that bottlenecks itself or doesn't fit the case you already bought.",
    features: [
      "Budget-based parts list tailored to use case",
      "Compatibility check (CPU/motherboard/RAM/PSU/case)",
      "Price-to-performance recommendations",
      "Where-to-buy guidance"
    ],
    tags: ["build advice", "parts consultation", "compatibility"]
  },
  {
    id: "component-upgrade-installation-personal",
    name: "Component Upgrade & Installation",
    category: "PCServices",
    audience: "Personal",
    group: "Builds & Upgrades",
    price: "$49 - $99 (+ parts)",
    description: "A single well-chosen upgrade can add years of useful life to a computer that still has plenty left in it.",
    features: [
      "RAM, SSD/HDD, GPU, or PSU upgrades",
      "Old-to-new data migration during upgrade",
      "Compatibility verification before purchase",
      "System tested after install"
    ],
    tags: ["upgrade", "installation", "components"]
  },
  {
    id: "data-backup-setup-personal",
    name: "Data Backup Setup",
    category: "PCServices",
    audience: "Personal",
    group: "Extras & Ongoing Care",
    price: "$69 - $129",
    description: "A backup you never tested isn't really a backup, it's a hope.",
    features: [
      "Local (external drive) and/or cloud backup configuration",
      "Automated backup schedule",
      "Initial full backup performed",
      "Quick-reference restore guide"
    ],
    tags: ["backup", "cloud backup", "data protection"]
  },
  {
    id: "remote-support-retainer-personal",
    name: "Remote Support Retainer",
    category: "PCServices",
    audience: "Personal",
    group: "Extras & Ongoing Care",
    price: "$19 - $35/mo",
    description: "Most software issues can be fixed in minutes remotely, without waiting for an in-person appointment.",
    features: [
      "Unlimited remote troubleshooting for software issues",
      "Monthly check-in scan for malware/performance issues",
      "Discounted rate on any in-person visits"
    ],
    tags: ["remote support", "retainer", "ongoing care"]
  },
  {
    id: "pc-health-checkup-report-personal",
    name: "PC Health Checkup Report",
    category: "PCServices",
    audience: "Personal",
    group: "Extras & Ongoing Care",
    price: "$29 - $49",
    description: "A quick health check catches small problems while they're still cheap to fix.",
    features: [
      "Full hardware and software health assessment",
      "Letter-grade scorecard",
      "Prioritized fix list in plain language",
      "Low-cost entry point for new customers"
    ],
    tags: ["health check", "scorecard", "assessment"]
  }
];
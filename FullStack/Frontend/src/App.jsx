import React, { useEffect, lazy, Suspense } from "react";
import "./App.css";

import { Routes, Route, Outlet, Navigate, useLocation } from "react-router-dom";
import { adminRoutes } from "./admin/routes.jsx";
const AccessPage = lazy(() => import("./account/AccessPage.jsx"));
const CandidateDashboard = lazy(() => import("./account/CandidateDashboard.jsx"));
const Careers = lazy(() => import("./pages/Careers.jsx"));
const Blogs = lazy(() => import("./pages/Blogs.jsx"));
const BlogDetail = lazy(() => import("./pages/BlogDetail.jsx"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy.jsx"));
import FormAuthGuard from "./components/FormAuthGuard.jsx";
import PermissionGate from "./components/PermissionGate.jsx";
const TalkToExpert = lazy(() => import("./components/TalkToExpert"));
const TechTorchWay = lazy(() => import("./pages/TechTorchWay.jsx"));
const CaseStudies = lazy(() => import("./pages/CaseStudies.jsx"));
const OperationsManagement = lazy(() => import("./pages/What'sNext/FieldNote/IntegratedCapabilities/OpManagement.jsx"));
const CultureInclusion = lazy(() => import("./pages/CultureInclusion.jsx"));
const PeopleManagementPage = lazy(() => import("./pages/PeopleManagement.jsx"));
const WebPortalsPage = lazy(() => import("./pages/WebPortal.jsx"));
const PaymentManagement = lazy(() => import("./pages/PaymentManagement.jsx"));
const HealthcareHospitalManagementPage = lazy(() => import("./pages/HealthcareHospitalManagementPage.jsx"));
const CrmSolutionsPage = lazy(() => import("./pages/CrmSolutionsPage.jsx"));
const EcommerceSolutionsPage = lazy(() => import("./pages/EcommerceSolutionsPage.jsx"));
const ProjectManagementSolutionsPage = lazy(() => import("./pages/ProjectManagementSolutionsPage.jsx"));
const AviationManagement = lazy(() => import("./pages/Capabilities/DigitalSolution/AviationManagement.jsx"));
const SupplyChainManagement = lazy(() => import("./pages/Capabilities/DigitalSolution/SupplyChainManagement.jsx"));
const SoftwareDevelopmentSupportPage = lazy(() => import("./pages/SoftwareDevelopmentSupportPage.jsx"));
const ResourceStaffingPage = lazy(() => import("./pages/ResourceStaffingPage.jsx"));
const CloudInfrastructurePage = lazy(() => import("./pages/CloudInfrastructurePage.jsx"));
const SoftwareEngineeringOutsourcingPage = lazy(() => import("./pages/SoftwareEngineeringOutsourcingPage.jsx"));
const ITConsultancyPage = lazy(() => import("./pages/ITConsultancyPage.jsx"));
import PromoPopup from "./components/PromoPopup.jsx";
import Seo from "./seo/Seo.jsx";
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

// =================================================
// COMMON COMPONENTS
// =================================================
import Navbar from "./components/Navbar";
import BackNavbar from "./components/BackNavbar";
import Footer from "./components/Footer";

// =================================================
// HOME COMPONENTS
// =================================================
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";
import Section4 from "./components/Section4";
// import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/section7";
import Section8 from "./components/section8";
import Section9 from "./components/section9";


const ExploreSolutions = lazy(() => import("./pages/ExploreSolutions.jsx"));
const ERP = lazy(() => import("./pages/ERP.jsx"));
const ErpSolutions = lazy(() => import("./pages/ErpSolutions.jsx"));
const BuildTechTorch = lazy(() => import("./pages/BuildTechTorch.jsx"));
const TechnologyServices = lazy(() => import("./pages/TechnologyServices.jsx"));
const TorchXSuite = lazy(() => import("./pages/TorchXSuite.jsx"));

// =================================================
// OUR STORY
// =================================================
const PhiosophySection = lazy(() => import("./pages/OurStory/PhilosophySection.jsx"));
const EnterpriseHero = lazy(() => import("./pages/OurStory/EnterpriseReadiness.jsx"));
const ScaleAtSpeed = lazy(() => import("./pages/OurStory/ScaleAtSpeed.jsx"));
const CoreFoundation = lazy(() => import("./pages/OurStory/CoreFoundation.jsx"));
const StrategicCapabilities = lazy(() => import("./pages/OurStory/StrategicCapabilities.jsx"));
const TransformationForm = lazy(() => import("./pages/OurStory/TransformationForm.jsx"));

// =================================================
// KNOW MORE
// =================================================
const EnterpriseAcceleration = lazy(() => import("./pages/KnowMore/EnterpriseAcceleration.jsx"));
const PracticalIntelligence = lazy(() => import("./pages/KnowMore/PracticalIntelligence.jsx"));
const ProvenImpact = lazy(() => import("./pages/KnowMore/ProvenImpact.jsx"));
const TransformationReady = lazy(() => import("./pages/KnowMore/TransformationReady.jsx"));

// =================================================
// TECHTORCH VIEW
// =================================================
const TechTorchView = lazy(() => import("./pages/What'sNext/TechTorchView/TechTorchView.jsx"));
const Philosophy = lazy(() => import("./pages/What'sNext/TechTorchView/Philosophy.jsx"));
const Capabilities = lazy(() => import("./pages/What'sNext/TechTorchView/Capabilities.jsx"));
const Methodology = lazy(() => import("./pages/What'sNext/TechTorchView/DeploymentMethodology.jsx"));
// import ReadyScale from "./pages/What'sNext/TechTorchView/ReadyScale.jsx";

// =================================================
// FIELD NOTE
// =================================================
const Banner = lazy(() => import("./pages/What'sNext/FieldNote/Banner.jsx"));
const TechnologySection = lazy(() => import("./pages/What'sNext/FieldNote/TechnologySection.jsx"));
const ConnectSection = lazy(() => import("./pages/What'sNext/FieldNote/ConnectSection.jsx"));
const OperationalAdvantage = lazy(() => import("./pages/What'sNext/FieldNote/OperationalAdvantage.jsx"));
const IntegratedCapabilities = lazy(() => import("./pages/What'sNext/FieldNote/IntegratedCapabilities.jsx"));

// =================================================
// INTEGRATED CAPABILITIES
// =================================================
const IntegratedCapLayout = lazy(() => import("./pages/What'sNext/FieldNote/IntegratedCapabilities/IntegratedCapLayout.jsx"));
const ERPIntegration = lazy(() => import("./pages/What'sNext/FieldNote/IntegratedCapabilities/ERPIntegration.jsx"));
const OpManagement = lazy(() => import("./pages/What'sNext/FieldNote/IntegratedCapabilities/OpManagement.jsx"));
const DataOrchestration = lazy(() => import("./pages/What'sNext/FieldNote/IntegratedCapabilities/DataOrchestration.jsx"));
const Legacy = lazy(() => import("./pages/What'sNext/FieldNote/IntegratedCapabilities/Legacy.jsx"));

// =================================================
// THINK AHEAD
// =================================================
const ReadSection = lazy(() => import("./pages/What'sNext/ThinkAhead/ReadSection.jsx"));
const Technologyarticlesection = lazy(() => import("./pages/What'sNext/ThinkAhead/Technologyarticlesection.jsx"));
const EcosystemHeroSection = lazy(() => import("./pages/What'sNext/ThinkAhead/Ecosystem.jsx"));
const PerspectiveSection = lazy(() => import("./pages/What'sNext/ThinkAhead/Perspectivesection.jsx"));

// =================================================
// CYBER SECURITY
// =================================================
const WhatsNextSection = lazy(() => import("./pages/What'sNext/CyberSecurity/WhatNextSection.jsx"));
const CyberSecurityHeroSection = lazy(() => import("./pages/What'sNext/CyberSecurity/CyberSecurityHeroSection.jsx"));
const SecurityCapabilitiesSection = lazy(() => import("./pages/What'sNext/CyberSecurity/SecurityCapabilities.jsx"));
const ResiliencePillarsSection = lazy(() => import("./pages/What'sNext/CyberSecurity/Resiliencepillarssection.jsx"));
const SecurityOutcomes = lazy(() => import("./pages/What'sNext/CyberSecurity/SecurityOutcomes.jsx"));
const SecurityPerspectiveSection = lazy(() => import("./pages/What'sNext/CyberSecurity/Securityperspectivesection.jsx"));
const AboutSecurity = lazy(() => import("./pages/What'sNext/CyberSecurity/AboutSecurity.jsx"));
const SecurityChallenge = lazy(() => import("./pages/What'sNext/CyberSecurity/SecurityChallenge.jsx"));
const EditorialReflection = lazy(() => import("./pages/What'sNext/CyberSecurity/EditorialReflection.jsx"));
const OurApproach = lazy(() => import("./pages/What'sNext/CyberSecurity/OurApproach.jsx"));
const WhyTechtorch = lazy(() => import("./pages/What'sNext/CyberSecurity/WhyTechtorch.jsx"));

// =================================================
// SECURE BUSINESS
// =================================================
const SecurityInitiative = lazy(() => import("./pages/What'sNext/CyberSecurity/SecureBusiness/SecurityInitiative.jsx"));
const ProtocolDelivery = lazy(() => import("./pages/What'sNext/CyberSecurity/SecureBusiness/ProtocolDelivery.jsx"));
const SelectionEngine = lazy(() => import("./pages/What'sNext/CyberSecurity/SecureBusiness/SelectionEngine.jsx"));
const AdvisoryFramework = lazy(() => import("./pages/What'sNext/CyberSecurity/SecureBusiness/AdvisoryFramework.jsx"));

// =================================================
// ENGAGEMENT PROTOCOL
// =================================================
const ViewEngagementProtocol = lazy(() => import("./pages/What'sNext/CyberSecurity/SecureBusiness/EngagementProtocol/ViewEngagementProtocol.jsx"));
const AcceptProceed = lazy(() => import("./pages/What'sNext/CyberSecurity/SecureBusiness/EngagementProtocol/AcceptProceed.jsx"));
const ExportProtocolPackage = lazy(() => import("./pages/What'sNext/CyberSecurity/SecureBusiness/EngagementProtocol/ExportProtocolPackage.jsx"));

// =================================================
// SCHEDULE ADVISORY
// =================================================
const AdvisoryDesk = lazy(() => import("./pages/What'sNext/CyberSecurity/SecureBusiness/ScheduleAdvisoryBriefing/AdvisoryDesk"));
const DispatchConsole = lazy(() => import("./pages/What'sNext/CyberSecurity/SecureBusiness/ScheduleAdvisoryBriefing/DispatchConsole.jsx"));
const TimeboxProtocol = lazy(() => import("./pages/What'sNext/CyberSecurity/SecureBusiness/ScheduleAdvisoryBriefing/TimeboxProtocol.jsx"));

// =================================================
// BUSINESS GROWTH
// =================================================
const GrowWithBusinessSection = lazy(() => import("./pages/What'sNext/BusinessGrowth/GrowwTechnology.jsx"));
const PurspectiveSection = lazy(() => import("./pages/What'sNext/BusinessGrowth/PurspectiveSection.jsx"));
const ArchitectureSection = lazy(() => import("./pages/What'sNext/BusinessGrowth/ArchitectureSection.jsx"));
const MethodologySection = lazy(() => import("./pages/What'sNext/BusinessGrowth/MethodologySection.jsx"));
const EcosystemCapabilitiesSection = lazy(() => import("./pages/What'sNext/BusinessGrowth/EcosystemCapabilities.jsx"));
const TechnologyCapabilities = lazy(() => import("./pages/What'sNext/BusinessGrowth/TechnologyCapabilties.jsx"));
const CoreEngineering = lazy(() => import("./pages/What'sNext/BusinessGrowth/CoreEngineering.jsx"));
const MarketExpertiseSection = lazy(() => import("./pages/What'sNext/BusinessGrowth/MarketExpertise.jsx"));
const InstitutionalCommitmentSection = lazy(() => import("./pages/What'sNext/BusinessGrowth/InstitutionalCommitment.jsx"));
const ParadigmSection = lazy(() => import("./pages/What'sNext/BusinessGrowth/ParadigmSection.jsx"));

// =================================================
// TECH PULSE
// =================================================
const DataDecisions = lazy(() => import("./pages/What'sNext/TechPulse/DataDecisions.jsx"));
const PerspectiveAnalysis = lazy(() => import("./pages/What'sNext/TechPulse/PerspectiveAnalysis.jsx"));
const StrategicInquiry = lazy(() => import("./pages/What'sNext/TechPulse/StrategicInquiry.jsx"));
const StructuredMethodology = lazy(() => import("./pages/What'sNext/TechPulse/StructuredMethodology.jsx"));
const OperationalImpact = lazy(() => import("./pages/What'sNext/TechPulse/OperationalImpact.jsx"));
const Automation = lazy(() => import("./pages/What'sNext/TechPulse/Automation.jsx"));
const CrossFunctional = lazy(() => import("./pages/What'sNext/TechPulse/CrossFunctional.jsx"));
const Discipline = lazy(() => import("./pages/What'sNext/TechPulse/Discipline.jsx"));
const ExecutiveStrategy = lazy(() => import("./pages/What'sNext/TechPulse/ExecutiveStrategy.jsx"));

// =================================================
// DIGITAL SOLUTIONS
// =================================================
const EnterpriseSolution = lazy(() => import("./pages/What'sNext/TechPulse/DigitalSolution/Enterprisesolution.jsx"));
const SystemicAgility = lazy(() => import("./pages/What'sNext/TechPulse/DigitalSolution/SystemicAgility.jsx"));
const ArchitectureLifecycle = lazy(() => import("./pages/What'sNext/TechPulse/DigitalSolution/ArchitectureLifecycle.jsx"));
const ValidatedSystems = lazy(() => import("./pages/What'sNext/TechPulse/DigitalSolution/ValidatedSystem.jsx"));

// =================================================
// CAPABILITIES - PLATFORM
// =================================================
const Businessplatformshero = lazy(() => import("./pages/Capabilities/Platform/Businessplatformshero.jsx"));
const OurAproach = lazy(() => import("./pages/Capabilities/Platform/OurAproach.jsx"));
const OurPlatforms = lazy(() => import("./pages/Capabilities/Platform/OurPlatforms.jsx"));
const TechTorchPlatform = lazy(() => import("./pages/Capabilities/Platform/TechTorchPlatform.jsx"));
const DirectEnterprise = lazy(() => import("./pages/Capabilities/Platform/DirectEnterprise.jsx"));

// =================================================
// CAPABILITIES - DIGITAL SOLUTIONS
// =================================================
const DigitalSolutionHero = lazy(() => import("./pages/Capabilities/DigitalSolution/DigitalSolutionHero.jsx"));
const DigitalTransformation = lazy(() => import("./pages/Capabilities/DigitalSolution/DigitalTransformation.jsx"));
const OurDigitalSolution = lazy(() => import("./pages/Capabilities/DigitalSolution/OurDigitalSolution.jsx"));
const DiffrentIndustries = lazy(() => import("./pages/Capabilities/DigitalSolution/DiffrentIndustries.jsx"));
const ConnectedBusiness = lazy(() => import("./pages/Capabilities/DigitalSolution/ConnectedBusiness.jsx"));
const TechTorchTechnology = lazy(() => import("./pages/Capabilities/DigitalSolution/TechTorchTechnology.jsx"));
const RequirementReality = lazy(() => import("./pages/Capabilities/DigitalSolution/RequirementReality.jsx"));

// =================================================
// CAPABILITIES - OUR SERVICE
// =================================================
const OurServiceHero = lazy(() => import("./pages/Capabilities/OurService/OurServiceHero.jsx"));
const StrategicPerspective = lazy(() => import("./pages/Capabilities/OurService/StrategicPerspective.jsx"));
const PortfolioArchitecture = lazy(() => import("./pages/Capabilities/OurService/PortfolioArchitecture.jsx"));
const DeliveryBlueprint = lazy(() => import("./pages/Capabilities/OurService/DeliveryBlueprint.jsx"));
const TechnologyRoadmap = lazy(() => import("./pages/Capabilities/OurService/TechnologyRoadmap.jsx"));

// =================================================
// CAPABILITIES - ARTIFICIAL INTELLIGENCE
// =================================================
const AiService = lazy(() => import("./pages/Capabilities/Ai/AiService.jsx"));
const AiStrategic = lazy(() => import("./pages/Capabilities/Ai/AiStrategic.jsx"));
const AiAdvantage = lazy(() => import("./pages/Capabilities/Ai/AiAdvantage.jsx"));
const AiEcosystem = lazy(() => import("./pages/Capabilities/Ai/AiEcosystem.jsx"));
const AiEcosystemIntegration = lazy(() => import("./pages/Capabilities/Ai/AiEcosystemIntegration.jsx"));

// =================================================
// CAPABILITIES - IT AUGMENTATION
// =================================================
const ItWorkforceVelocity = lazy(() => import("./pages/Capabilities/ItAugmentation/ItWorkforceVelocity.jsx"));
const ItStrategicperspective = lazy(() => import("./pages/Capabilities/ItAugmentation/ItStrategicperspective.jsx"));
const ItFlexibleEngagement = lazy(() => import("./pages/Capabilities/ItAugmentation/ItFlexibleEngagement.jsx"));
const ItOperational = lazy(() => import("./pages/Capabilities/ItAugmentation/ItOperational.jsx"));

// =================================================
// CONTRACT STAFFING
// =================================================
const Contracthero = lazy(() => import("./pages/Capabilities/ItAugmentation/ContractStaffing/contracthero.jsx"));
const CapabilityAnalysis = lazy(() => import("./pages/Capabilities/ItAugmentation/ContractStaffing/CapabilityAnalysis.jsx"));
const Pipeline = lazy(() => import("./pages/Capabilities/ItAugmentation/ContractStaffing/Pipeline.jsx"));

// =================================================
// CONTRACT TO HIRE
// =================================================
const ContractToHireHero = lazy(() => import("./pages/Capabilities/ItAugmentation/ContractToHire/ContractToHireHero.jsx"));
const CthFramework = lazy(() => import("./pages/Capabilities/ItAugmentation/ContractToHire/CthFramework.jsx"));
const BuildConfidence = lazy(() => import("./pages/Capabilities/ItAugmentation/ContractToHire/BuildConfidence.jsx"));

// =================================================
// DEDICATED DEVELOPMENT
// =================================================
const DdHero = lazy(() => import("./pages/Capabilities/ItAugmentation/DedicatedDevelopment/DdHero.jsx"));
const DdOverview = lazy(() => import("./pages/Capabilities/ItAugmentation/DedicatedDevelopment/DdOverview.jsx"));
const DdStrenghten = lazy(() => import("./pages/Capabilities/ItAugmentation/DedicatedDevelopment/DdStrenghten.jsx"));

// =================================================
// REMOTE ENGINEER
// =================================================
const ReHero = lazy(() => import("./pages/Capabilities/ItAugmentation/RemoteEngineer/ReHero.jsx"));
const CapabilityOverview = lazy(() => import("./pages/Capabilities/ItAugmentation/RemoteEngineer/CapabilityOverview.jsx"));
const ReStrengthen = lazy(() => import("./pages/Capabilities/ItAugmentation/RemoteEngineer/ReStrengthen.jsx"));

// =================================================
// PROJECT BASED HIRING
// =================================================
const PbhHero = lazy(() => import("./pages/Capabilities/ItAugmentation/ProjectBasedHiring/PbhHero.jsx"));
const PbhExecutive = lazy(() => import("./pages/Capabilities/ItAugmentation/ProjectBasedHiring/PbhExecutive.jsx"));
const PbhSpecialized = lazy(() => import("./pages/Capabilities/ItAugmentation/ProjectBasedHiring/PbhSpecialized.jsx"));
const PbhProjectForward = lazy(() => import("./pages/Capabilities/ItAugmentation/ProjectBasedHiring/PbhProjectForward.jsx"));

// =================================================
// RESOURCE / BENCH / VENDOR
// =================================================
const RrMain = lazy(() => import("./pages/Capabilities/ItAugmentation/ResourceReplacement/RrMain.jsx"));
const BhMain = lazy(() => import("./pages/Capabilities/ItAugmentation/BenchHiring/BhMain.jsx"));
const VpMain = lazy(() => import("./pages/Capabilities/ItAugmentation/VendorPartnership/VpMain.jsx"));
const BecomePartner = lazy(() => import("./pages/Capabilities/ItAugmentation/VendorPartnership/BecomePartner.jsx"));

// =================================================
// MSP SUPPORT
// =================================================
const MSP1 = lazy(() => import("./pages/Capabilities/ItAugmentation/MSPSupport/MSP1.jsx"));
const MSP2 = lazy(() => import("./pages/Capabilities/ItAugmentation/MSPSupport/MSP2.jsx"));
const MSP3 = lazy(() => import("./pages/Capabilities/ItAugmentation/MSPSupport/MSP3.jsx"));
const DiscussPriorities = lazy(() => import("./pages/Capabilities/ItAugmentation/MSPSupport/DiscussPriorities.jsx"));
const ConnectMSP = lazy(() => import("./pages/Capabilities/ItAugmentation/MSPSupport/ConnectMSP.jsx"));

// =================================================
// OFSHORE TEAMS
// =================================================
const OffshoreStrategy = lazy(() => import("./pages/Capabilities/ItAugmentation/OffshoreTeams/OffshoreStrategy.jsx"));
const EngagementArchitecture = lazy(() => import("./pages/Capabilities/ItAugmentation/OffshoreTeams/EngagementArchitecture.jsx"));
const LifecycleGovernance = lazy(() => import("./pages/Capabilities/ItAugmentation/OffshoreTeams/LifecycleGovernance.jsx"));
const DevelopmentTeam = lazy(() => import("./pages/Capabilities/ItAugmentation/OffshoreTeams/DevelopmentTeam.jsx"));
const DevelopmentRequirements = lazy(() => import("./pages/Capabilities/ItAugmentation/OffshoreTeams/DevelopmentRequirements.jsx"));

// =================================================
// EDUCATION
// =================================================

const EducationHero = lazy(() => import("./pages/Industry/Education/EducationHero.jsx"));
const EducationWork = lazy(() => import("./pages/Industry/Education/EducationWork.jsx"));
const EducationTechnology = lazy(() => import("./pages/Industry/Education/EducationTechnology.jsx"));
const EducationGrowth = lazy(() => import("./pages/Industry/Education/EducationGrowth.jsx"));
const EducationMethodology = lazy(() => import("./pages/Industry/Education/EducationMethodology.jsx"));
// import EducationTransform from "./pages/Industry/Education/EducationTransform.jsx";
const EducationSolutions = lazy(() => import("./pages/Industry/Education/EducationSolutions.jsx"));
const ScheduleDiscovery = lazy(() => import("./pages/Industry/Education/ScheduleDiscovery.jsx"));

// =================================================
// INSURANCE
// =================================================

const InsuranceHero = lazy(() => import("./pages/Industry/Insurance/InsuranceHero.jsx"));
const InsuranceSolution = lazy(() => import("./pages/Industry/Insurance/InsuranceSolution.jsx"));
const ConnectedOperation = lazy(() => import("./pages/Industry/Insurance/ConnectedOperations.jsx"));
const InsuranceDigitalTransformation = lazy(() => import("./pages/Industry/Insurance/InsuranceDigitalTransformation.jsx"));
const InsuranceCustomer = lazy(() => import("./pages/Industry/Insurance/InsuranceCustomer.jsx"));
const InsuranceWhyTt = lazy(() => import("./pages/Industry/Insurance/InsuranceWhyTt.jsx"));
const GetInTouch = lazy(() => import("./pages/Industry/Insurance/GetInTouch.jsx"));

// =================================================
// FINANCE
// =================================================

const FinanceHero = lazy(() => import("./pages/Industry/Finance/FinanceHero.jsx"));
const FinanceArchitecture = lazy(() => import("./pages/Industry/Finance/FinanceArchitecture.jsx"));
const FinanceTechnology = lazy(() => import("./pages/Industry/Finance/FinanceTechnology.jsx"));
const FinanceKeyBusiness = lazy(() => import("./pages/Industry/Finance/FinanceKeyBusiness.jsx"));
const FinanceFintech = lazy(() => import("./pages/Industry/Finance/FinanceFintech.jsx"));
const FinanceNextStep = lazy(() => import("./pages/Industry/Finance/FinanceNextStep.jsx"));
const FinanceGetInTouch = lazy(() => import("./pages/Industry/Finance/FinanceGetInTouch.jsx"));

// =================================================
// HEALTHCARE
// =================================================

const HealthcareHero = lazy(() => import("./pages/Industry/Healthcare/HealthcareHero.jsx"));
const HealthcareExplore = lazy(() => import("./pages/Industry/Healthcare/HealthcareExplore.jsx"));
const HealthcareTechnology = lazy(() => import("./pages/Industry/Healthcare/HealthcareTechnology.jsx"));
const HealthcareOperation = lazy(() => import("./pages/Industry/Healthcare/HealthcareOperation.jsx"));
const ExperianceSecurity = lazy(() => import("./pages/Industry/Healthcare/ExperianceSecurity.jsx"));
const InsightOperations = lazy(() => import("./pages/Industry/Healthcare/InsightOperations.jsx"));
const HealthcareApproach = lazy(() => import("./pages/Industry/Healthcare/HealthcareApproach.jsx"));
const TransformationDesk = lazy(() => import("./pages/Industry/Healthcare/TransformationDesk.jsx"));

const HealthcareGetInTouch = lazy(() => import("./pages/Industry/Healthcare/HealthcareGetInTouch.jsx"));


// =================================================
// INFORMATION TECHNOLOGY
// =================================================
const ItHero = lazy(() => import("./pages/Industry/InformationTechnology/ItHero.jsx"));
const ItBusiness = lazy(() => import("./pages/Industry/InformationTechnology/ItBusiness.jsx"));
const ItService = lazy(() => import("./pages/Industry/InformationTechnology/ItService.jsx"));
const ItSoftware = lazy(() => import("./pages/Industry/InformationTechnology/ItSoftware.jsx"));
const ItDigitalSolution = lazy(() => import("./pages/Industry/InformationTechnology/ItDigitalSolution.jsx"));
const ItInfrastructure = lazy(() => import("./pages/Industry/InformationTechnology/ItInfrastructure.jsx"));
const ItApproach = lazy(() => import("./pages/Industry/InformationTechnology/ItApproach.jsx"));
const ItTechTorch = lazy(() => import("./pages/Industry/InformationTechnology/ItTechTorch.jsx"));
const ItFoundation = lazy(() => import("./pages/Industry/InformationTechnology/ItFoundation.jsx"));
const ITGetInTouch = lazy(() => import("./pages/Industry/InformationTechnology/ITGetInTouch.jsx"));

// =================================================
// INFORMATION TECHNOLOGY
// =================================================

const ManufacturingHero = lazy(() => import("./pages/Industry/Manufacturing/ManufacturingHero.jsx"));
const ManufacturingTechnology = lazy(() => import("./pages/Industry/Manufacturing/ManufacturingTechnology.jsx"));
const ManufacturingSolution = lazy(() => import("./pages/Industry/Manufacturing/ManufacturingSolution.jsx"));
const ManufacturingErp = lazy(() => import("./pages/Industry/Manufacturing/ManufacturingErp.jsx"));
const SoftwareEngineering = lazy(() => import("./pages/Industry/Manufacturing/SoftwareEngineering.jsx"));
const ManufacturingApproach = lazy(() => import("./pages/Industry/Manufacturing/ManufacturingApproach.jsx"));
const ManufacturingTechTorch = lazy(() => import("./pages/Industry/Manufacturing/ManufacturingTechTorch.jsx"));
const ManufacturingGetInTouch = lazy(() => import("./pages/Industry/Manufacturing/ManufacturingGetInTouch.jsx"));


// =================================================
// TELECOMMUNICATIONS
// =================================================

const TcHero = lazy(() => import("./pages/Industry/Telecommunication/TcHero.jsx"));
const TcTechnology = lazy(() => import("./pages/Industry/Telecommunication/TcTechnology.jsx"));
const TcKeySolution = lazy(() => import("./pages/Industry/Telecommunication/TcKeySolution.jsx"));
const TcSoftwareEngineer = lazy(() => import("./pages/Industry/Telecommunication/TcSoftwareEngineer.jsx"));
const TcService = lazy(() => import("./pages/Industry/Telecommunication/TcService.jsx"));
const TcApproach = lazy(() => import("./pages/Industry/Telecommunication/TcApproach.jsx"));
const TcGetinTouch = lazy(() => import("./pages/Industry/Telecommunication/TcGetInTouch.jsx"));

// =================================================
// ENERGY
// =================================================

const EnergyHero = lazy(() => import("./pages/Industry/Energy/EnergyHero.jsx"));
const EnergyTechnology = lazy(() => import("./pages/Industry/Energy/EnergyTechnology.jsx"));
const EnergyKeySolution = lazy(() => import("./pages/Industry/Energy/EnergyKeySolution.jsx"));
const EnergySoftwareEngineering = lazy(() => import("./pages/Industry/Energy/EnergySoftwareEngineering.jsx"));
const EnergyTechnologyService = lazy(() => import("./pages/Industry/Energy/EnergyTechnologyService.jsx"));
const EnergyApproach = lazy(() => import("./pages/Industry/Energy/EnergyApproach.jsx"));
const EnergyGetInTouch = lazy(() => import("./pages/Industry/Energy/EnergyGetInTouch.jsx"));

// =================================================
// TRANSPORTATION
// =================================================

const TransHero = lazy(() => import("./pages/Industry/Transportation/TransHero.jsx"));
const TransportationConnected = lazy(() => import("./pages/Industry/Transportation/TransportationConnected.jsx"));
const TransportationSolution = lazy(() => import("./pages/Industry/Transportation/TransportationSolution.jsx"));
const TransportationSupplyChain = lazy(() => import("./pages/Industry/Transportation/TransportationSupplyChain.jsx"));
const TransportationSoftware = lazy(() => import("./pages/Industry/Transportation/TransportationSoftware.jsx"));
const TransportationApproach = lazy(() => import("./pages/Industry/Transportation/TransportationApproach.jsx"));
const TransportationEnterprise = lazy(() => import("./pages/Industry/Transportation/TransportationEnterprise.jsx"));
const TransportationGetInTouch = lazy(() => import("./pages/Industry/Transportation/TransportationGetInTouch.jsx"));

// =================================================
// FMCG
// =================================================

const FmcgHero = lazy(() => import("./pages/Industry/Fmcg/FmcgHero.jsx"));
const FmcgSolution = lazy(() => import("./pages/Industry/Fmcg/FmcgSolution.jsx"));
const FmcgOurSolution = lazy(() => import("./pages/Industry/Fmcg/FmcgOurSolution.jsx"));
const FmcgManagement = lazy(() => import("./pages/Industry/Fmcg/FmcgManagement.jsx"));
const FmcgBusiness = lazy(() => import("./pages/Industry/Fmcg/FmcgBusiness.jsx"));
const FmcgSoftwareEngineering = lazy(() => import("./pages/Industry/Fmcg/FmcgSoftwareEngineering.jsx"));
const FmcgTechnologyService = lazy(() => import("./pages/Industry/Fmcg/FmcgTechnologyService.jsx"));
const FmcgApproach = lazy(() => import("./pages/Industry/Fmcg/FmcgApproach.jsx"));
const FmcgGetInTouch = lazy(() => import("./pages/Industry/Fmcg/FmcgGetInTouch.jsx"));

// =================================================
// E-COMMERCE
// =================================================
const EcommerceHero = lazy(() => import("./pages/Industry/ECommerce/EcommerceHero.jsx"));
const EcommerceEnterprise = lazy(() => import("./pages/Industry/ECommerce/EcommerceEnterprise.jsx"));
const EcommerceCapabilities = lazy(() => import("./pages/Industry/ECommerce/EcommerceCapabilities.jsx"));
const EcommerceFrontend = lazy(() => import("./pages/Industry/ECommerce/EcommerceFrontend.jsx"));
const EcommerceSynergy = lazy(() => import("./pages/Industry/ECommerce/EcommerceSynergy.jsx"));
const EcommerceCustom = lazy(() => import("./pages/Industry/ECommerce/EcommerceCustom.jsx"));
const EcommerceIntelligence = lazy(() => import("./pages/Industry/ECommerce/EcommerceIntelligence.jsx"));
const EcommerceApproach = lazy(() => import("./pages/Industry/ECommerce/EcommerceApproach.jsx"));
const EcommerceNextPhase = lazy(() => import("./pages/Industry/ECommerce/EcommerceNextPhase.jsx"));
const ECommerceGetInTouch = lazy(() => import("./pages/Industry/ECommerce/ECommerceGetInTouch.jsx"));

const StartConversation = lazy(() => import("./pages/StartConversation/StartConversation.jsx"));
const ExploreQuestions = lazy(() => import("./pages/StartConversation/ExploreQuestions.jsx"));
const ConversationToggle = lazy(() => import("./pages/StartConversation/ConversationToggle.jsx"));

// =================================================
// ABOUT US
// =================================================

const Leadership = lazy(() => import("./pages/AboutUs/Leadership.jsx"));
const CompanyOverview = lazy(() => import("./pages/AboutUs/CompanyOverview.jsx"));
const Idea = lazy(() => import("./pages/AboutUs/Idea.jsx"));
const PartnersEcosystem = lazy(() => import("./pages/AboutUs/PartnersEcosystem.jsx"));
const Investors = lazy(() => import("./pages/AboutUs/Investors.jsx"));


const Media = lazy(() => import("./pages/Insights/Media.jsx"));
const OperationsManagementPage = lazy(() => import("./pages/OperationsManagementPage.jsx"));


// =================================================
// SCROLL TO TOP
// =================================================

// Take scroll control from the browser (runs as soon as the app loads)
if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

// True when this page load was a browser refresh
const isPageReload = (() => {
  try {
    return performance.getEntriesByType("navigation")[0]?.type === "reload";
  } catch {
    return false;
  }
})();

// The history key of the page the visitor refreshed on
// Shown while a lazily-loaded page chunk is downloading
function PageLoader() {
  return (
    <div
      role="status"
      aria-label="Loading"
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "4px solid #e5e7eb",
          borderTopColor: "#f97316",
          animation: "tt-spin 0.8s linear infinite",
        }}
      />
      <style>{"@keyframes tt-spin{to{transform:rotate(360deg)}}"}</style>
    </div>
  );
}

let bootKey = null;

function ScrollToTop() {
  const { pathname, hash, key } = useLocation();

  if (bootKey === null) bootKey = key;

  useEffect(() => {
    // Refresh: always start at the top and drop any leftover #section
    if (isPageReload && key === bootKey) {
      if (hash) {
        window.history.replaceState(
          window.history.state,
          "",
          pathname + window.location.search
        );
      }
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      return;
    }

    // If the link has a #section, scroll to that section
    if (hash) {
      const id = hash.replace("#", "");
      let tries = 0;

      // Retry briefly because the home page may still be mounting
      const timer = setInterval(() => {
        const el = document.getElementById(id);
        tries += 1;

        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          clearInterval(timer);
        } else if (tries > 20) {
          clearInterval(timer);
        }
      }, 100);

      return () => clearInterval(timer);
    }

    // Otherwise go to the top of the page
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname, hash, key]);

  return null;
}

// =================================================
// COMMON LAYOUT
// =================================================

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Login restriction for public forms */}
      <FormAuthGuard />

      {/* { TorchX Talent promo pop-up } */}
      <PromoPopup />

      {/* NAVBAR */}
      <Navbar />
      
      <BackNavbar />

      {/* PAGE CONTENT */}
      <main className="flex-1 w-full">
        <Outlet />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}


// =================================================
// HOME PAGE
// =================================================
function Home() {
  return (
    <>
      <Hero />
      <Hero2 />
      <Hero3 />
      <Section4 />
      {/* <Section5 /> */}
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
    </>
  );
}


// =================================================
// OUR STORY
// =================================================
function PhilosophyPage() {
  return (
    <>
      <EnterpriseHero />
      <CoreFoundation />
      <ScaleAtSpeed />
      <StrategicCapabilities />
      <PhiosophySection />
      <TransformationForm />
    </>
  );
}

// =================================================
// KNOW MORE
// =================================================
function KnowMorePage() {
  return (
    <>
      <EnterpriseAcceleration />
      <TransformationReady />
      <ProvenImpact />
      <PracticalIntelligence />
    </>
  );
}

// =================================================
// TECHTORCH VIEW
// =================================================
function WhatNextPage() {
  return (
    <>
      <TechTorchView />
      <Philosophy />
      <Capabilities />
      <Methodology />
      {/* <ReadyScale /> */}
    </>
  );
}

// =================================================
// FIELD NOTE
// =================================================
function FieldNotePage() {
  return (
    <>
      <Banner />
      <TechnologySection />
      <ConnectSection />
      <OperationalAdvantage />
      <IntegratedCapabilities />
    </>
  );
}

// =================================================
// THINK AHEAD
// =================================================
function ThinkAheadPage() {
  return (
    <>
      <ReadSection />
      <Technologyarticlesection />
      <PerspectiveSection />
      <EcosystemHeroSection />
    </>
  );
}

// =================================================
// CYBER SECURITY
// =================================================
function CyberSecurityPage() {
  return (
    <>
      <CyberSecurityHeroSection />
      <SecurityPerspectiveSection />
      <SecurityChallenge />
      <OurApproach />
      <SecurityCapabilitiesSection />
      <ResiliencePillarsSection />
      <WhyTechtorch />
      <SecurityOutcomes />
      <EditorialReflection />
      <AboutSecurity />
      <WhatsNextSection />
    </>
  );
}

// =================================================
// SECURE BUSINESS
// =================================================
function SecureBusinessPage() {
  return (
    <>
      <SecurityInitiative />
      <ProtocolDelivery />
      <SelectionEngine />
      <AdvisoryFramework />
    </>
  );
}

// =================================================
// SCHEDULE ADVISORY
// =================================================
function ScheduleAdvisoryPage() {
  return (
    <>
      <AdvisoryDesk />
      <DispatchConsole />
      <TimeboxProtocol />
    </>
  );
}

// =================================================
// BUSINESS GROWTH
// =================================================
function BusinessGrowthPage() {
  return (
    <>
      <GrowWithBusinessSection />
      <PurspectiveSection />
      <ArchitectureSection />
      <MethodologySection />
      <EcosystemCapabilitiesSection />
      <TechnologyCapabilities />
      <CoreEngineering />
      <MarketExpertiseSection />
      <InstitutionalCommitmentSection />
      <ParadigmSection />
    </>
  );
}

// =================================================
// TECH PULSE
// =================================================
function TechPulsePage() {
  return (
    <>
      <DataDecisions />
      <PerspectiveAnalysis />
      <StrategicInquiry />
      <StructuredMethodology />
      <OperationalImpact />
      <Automation />
      <CrossFunctional />
      <Discipline />
      <ExecutiveStrategy />
    </>
  );
}

// =================================================
// DIGITAL SOLUTION
// =================================================
function DigitalSolution() {
  return (
    <>
      <EnterpriseSolution />
      <SystemicAgility />
      <ArchitectureLifecycle />
      <ValidatedSystems />
    </>
  );
}

// =================================================
// PLATFORM
// =================================================
function Platform() {
  return (
    <>
      <Businessplatformshero />
      <OurAproach />
      <OurPlatforms />
      <TechTorchPlatform />
      <DirectEnterprise />
    </>
  );
}

// =================================================
// DIGITAL SOLUTIONS - CAPABILITIES
// =================================================
function CapabilitiesDigitalSolution() {
  return (
    <>
      <DigitalSolutionHero />
      <DigitalTransformation />
      <OurDigitalSolution />
      <DiffrentIndustries />
      <ConnectedBusiness />
      <TechTorchTechnology />
      <RequirementReality />
    </>
  );
}

// =================================================
// OUR SERVICE
// =================================================
function OurServiceSection() {
  return (
    <>
      <OurServiceHero />
      <StrategicPerspective />
      <PortfolioArchitecture />
      <DeliveryBlueprint />
      <TechnologyRoadmap />
    </>
  );
}

// =================================================
// ARTIFICIAL INTELLIGENCE
// =================================================
function ArtificialIntelligent() {
  return (
    <>
      <AiService />
      <AiStrategic />
      <AiAdvantage />
      <AiEcosystem />
      <AiEcosystemIntegration />
    </>
  );
}

// =================================================
// IT AUGMENTATION
// =================================================
function ItAugmentational() {
  return (
    <>
      <ItWorkforceVelocity />
      <ItStrategicperspective />
      <ItFlexibleEngagement />
      <ItOperational />
    </>
  );
}

// =================================================
// CONTRACT STAFFING
// =================================================
function ContractStaffing() {
  return (
    <>
      <Contracthero />
      <CapabilityAnalysis />
      <Pipeline />
    </>
  );
}

// =================================================
// CONTRACT TO HIRE
// =================================================
function ContractToHire() {
  return (
    <>
      <ContractToHireHero />
      <CthFramework />
      <BuildConfidence />
    </>
  );
}

// =================================================
// DEDICATED DEVELOPMENT
// =================================================
function DedicatedDevelopment() {
  return (
    <>
      <DdHero />
      <DdOverview />
      <DdStrenghten />
    </>
  );
}

// =================================================
// REMOTE ENGINEERS
// =================================================
function RemoteEngineers() {
  return (
    <>
      <ReHero />
      <CapabilityOverview />
      <ReStrengthen />
    </>
  );
}

// =================================================
// PROJECT BASED HIRING
// =================================================
function ProjectBasedHiring() {
  return (
    <>
      <PbhHero />
      <PbhExecutive />
      <PbhSpecialized />
      <PbhProjectForward />
    </>
  );
}

// =================================================
// RESOURCE REPLACEMENT
// =================================================
function ResourceReplacement() {
  return (
    <>
      <RrMain />
    </>
  );
}

// =================================================
// BENCH HIRING
// =================================================
function BenchHiring() {
  return (
    <>
      <BhMain />
    </>
  );
}

// =================================================
// VENDOR PARTNERSHIP
// =================================================
function VendorPartnership() {
  return (
    <>
      <VpMain />
    </>
  );
}

// =================================================
// MSP SUPPORT
// =================================================
function MSPSupport() {
  return (
    <>
      <MSP1 />
      <MSP2 />
      <MSP3 />
    </>
  );
}

function OffshoreTeams() {
  return (
    <>
     <OffshoreStrategy/>
     <EngagementArchitecture/>
     <LifecycleGovernance/>
    </>
  );
}

function Education(){
  return( 
    <>
    <EducationHero />
    <EducationWork />
    <EducationTechnology />
    <EducationGrowth />
    <EducationMethodology />
    {/* <EducationTransform /> */}
    </>
  )
}
function Insurance(){
  return(
    <>
    <InsuranceHero />
    <InsuranceSolution />
    <ConnectedOperation />
    <InsuranceDigitalTransformation />
    <InsuranceCustomer />
    <InsuranceWhyTt />
    </>
  )
}
function Finance(){
  return(
    <>
    <FinanceHero />
    <FinanceArchitecture />
    <FinanceTechnology />
    <FinanceKeyBusiness />
    <FinanceFintech  />
    <FinanceNextStep />
    </>
  )
}
function Healthcare(){
  return(
    <>
    <HealthcareHero />
    <HealthcareExplore />
    <HealthcareTechnology />
    <HealthcareOperation />
    <ExperianceSecurity />
    <InsightOperations />
    <HealthcareApproach />
    <TransformationDesk />
    </>
  )
}
function InformationTechnology(){
  return(
    <>
    <ItHero />
    <ItBusiness />
    <ItService />
    <ItSoftware />
    <ItDigitalSolution />
    <ItInfrastructure />
    <ItApproach />
    <ItTechTorch />
    <ItFoundation />
    </>
  )
}
function Manufacturing(){
  return(
    <>
    <ManufacturingHero />
    <ManufacturingTechnology />
    <ManufacturingSolution />
    <ManufacturingErp />
    <SoftwareEngineering />
    <ManufacturingApproach />
    <ManufacturingTechTorch />
    </>
  )
}
function Telecommunications(){
  return (
    <>
    <TcHero />
    <TcTechnology />
    <TcKeySolution />
    <TcSoftwareEngineer />
    <TcService />
    <TcApproach />
    </>
  )
}

function Energy(){
  return(
    <>
    <EnergyHero />
    <EnergyTechnology />
    <EnergyKeySolution />
    <EnergySoftwareEngineering />
    <EnergyTechnologyService />
    <EnergyApproach />
    </>
  )
}
function Transportation(){
  return(
    <>
    <TransHero />
    <TransportationConnected />
    <TransportationSolution />
    <TransportationSupplyChain />
    <TransportationSoftware />
    <TransportationApproach />
    <TransportationEnterprise />
    </>
  )
}
function Fmcg(){
  return(
    <>
    <FmcgHero />
    <FmcgSolution />
    <FmcgOurSolution />
    <FmcgManagement />
    <FmcgBusiness />
    <FmcgSoftwareEngineering />
    <FmcgTechnologyService />
    <FmcgApproach />
    </>
  )
}
function ECommerce(){
  return(
    <>
    <EcommerceHero />
    <EcommerceEnterprise />
    <EcommerceCapabilities />
    <EcommerceFrontend />
    <EcommerceSynergy />
    <EcommerceCustom />
    <EcommerceIntelligence />
    <EcommerceApproach />
    <EcommerceNextPhase />
    </>
  )
}
function AboutUs() {
  return (
    <>
      <Leadership />
    </>
  );
}
// =================================================
// APP
// =================================================
function App() {
  return (
    <>
      {/* Always move to top when route changes */}
      <ScrollToTop />

      {/* SEO: title / description / canonical / OG tags for every route */}
      <Seo />

      <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* =================================================
            ALL PAGES USE SAME NAVBAR + FOOTER
        ================================================= */}
        <Route element={<MainLayout />}>
          {/* ================= HOME ================= */}
          <Route path="/" element={<Home />} />

          <Route path="/explore-solutions" element={<ExploreSolutions />} />
          <Route path="/explore-erp" element={<ERP />} />
          <Route path="/erp" element={<ErpSolutions />} />
          <Route path="/build-with-techtorch" element={<BuildTechTorch />} />
          <Route path="/explore-services" element={<TechnologyServices />} />
          <Route path="/explore-torchXsuite" element={<TorchXSuite />} />
          <Route path="/media" element={<Media />} />
          <Route path="/the-techtorch-way" element={<TechTorchWay />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route
            path="/operation-management"
            element={<OperationsManagement />}
          />
          <Route path="/culture-inclusion" element={<CultureInclusion />} />
          <Route path="/company-overview" element={<CompanyOverview />} />
          <Route
            path="/operations-management"
            element={<OperationsManagementPage />}
          />
          <Route
            path="/supply-chain-management"
            element={<SupplyChainManagement />}
          />
          <Route path="/people-management" element={<PeopleManagementPage />} />
          <Route path="/web-portals" element={<WebPortalsPage />} />
          <Route path="/payment-management" element={<PaymentManagement />} />
          <Route
            path="/healthcare-hospital-management"
            element={<HealthcareHospitalManagementPage />}
          />
          <Route path="/crm" element={<CrmSolutionsPage />} />
          <Route
            path="/ecommerce-solutions"
            element={<EcommerceSolutionsPage />}
          />
          <Route
            path="/project-management"
            element={<ProjectManagementSolutionsPage />}
          />
          <Route path="/investors" element={<Investors />} />
          <Route path="/aviation-management" element={<AviationManagement />} />
          
          <Route
            path="/software-development-support"
            element={<SoftwareDevelopmentSupportPage />}
          />
          <Route path="/resource-staffing" element={<ResourceStaffingPage />} />
          <Route
            path="/cloud-infrastructure"
            element={<CloudInfrastructurePage />}
          />
          <Route
            path="/software-engineering-outsourcing"
            element={<SoftwareEngineeringOutsourcingPage />}
          />
          <Route path="/it-consultancy" element={<ITConsultancyPage />} />

          {/* ================= OUR STORY ================= */}
          <Route path="/Our-Story" element={<PhilosophyPage />} />

          {/* ================= KNOW MORE ================= */}
          <Route path="/KnowMore" element={<KnowMorePage />} />

          {/* ================= TECHTORCH VIEW ================= */}
          <Route path="/TechTorchView" element={<WhatNextPage />} />

          {/* ================= FIELD NOTE ================= */}
          <Route path="/field-note" element={<FieldNotePage />} />

          {/* ================= INTEGRATED CAPABILITIES ================= */}
          <Route
            path="/integrated-capabilities"
            element={<IntegratedCapLayout />}
          >
            <Route path="erp-integration" element={<ERPIntegration />} />

            <Route path="operations-management" element={<OpManagement />} />

            <Route path="data-orchestration" element={<DataOrchestration />} />

            <Route path="legacy-modernization" element={<Legacy />} />
          </Route>

          {/* ================= THINK AHEAD ================= */}
          <Route path="/think-ahead" element={<ThinkAheadPage />} />

          {/* ================= CYBER SECURITY ================= */}
          <Route path="/cyber-security" element={<CyberSecurityPage />} />

          {/* ================= SECURE BUSINESS ================= */}
          <Route path="/secure-business" element={<SecureBusinessPage />} />

          {/* ================= SCHEDULE ADVISORY ================= */}
          <Route path="/schedule-advisory" element={<ScheduleAdvisoryPage />} />

          {/* ================= ENGAGEMENT PROTOCOL ================= */}
          <Route
            path="/engagement-protocol"
            element={<ViewEngagementProtocol />}
          />

          <Route path="/accept-proceed" element={<AcceptProceed />} />

          <Route path="/export-protocol" element={<ExportProtocolPackage />} />

          {/* ================= BUSINESS GROWTH ================= */}
          <Route path="/Business-growth" element={<BusinessGrowthPage />} />

          {/* ================= TECH PULSE ================= */}
          <Route path="/data-decisions" element={<TechPulsePage />} />

          {/* ================= DIGITAL SOLUTION ================= */}
          <Route path="/digital-solutions" element={<DigitalSolution />} />

          {/* =================================================
              CAPABILITIES
          ================================================= */}

          {/* PLATFORM */}
          <Route path="/platform" element={<Platform />} />

          {/* DIGITAL SOLUTION */}
          <Route
            path="/digitalsolution"
            element={<CapabilitiesDigitalSolution />}
          />

          {/* OUR SERVICE */}
          <Route path="/OurService" element={<OurServiceSection />} />

          {/* ARTIFICIAL INTELLIGENCE */}
          <Route
            path="/ArtificialIntelligent"
            element={<ArtificialIntelligent />}
          />

          {/* IT AUGMENTATION */}
          <Route path="/ItAugmentation" element={<ItAugmentational />} />

          {/* =================================================
              STAFFING
          ================================================= */}

          {/* CONTRACT STAFFING */}
          <Route path="/Contract-Staffing" element={<ContractStaffing />} />

          {/* CONTRACT TO HIRE */}
          <Route path="/contract-to-hire" element={<ContractToHire />} />

          {/* DEDICATED DEVELOPMENT */}
          <Route
            path="/Dedicated-Development-Teams"
            element={<DedicatedDevelopment />}
          />

          {/* REMOTE ENGINEERS */}
          <Route path="/remote-engineers" element={<RemoteEngineers />} />

          {/* PROJECT BASED HIRING */}
          <Route
            path="/project-based-hiring"
            element={<ProjectBasedHiring />}
          />

          {/* RESOURCE REPLACEMENT */}
          <Route
            path="/resource-replacement"
            element={<ResourceReplacement />}
          />

          {/* BENCH HIRING */}
          <Route path="/bench-hiring" element={<BenchHiring />} />

          {/* VENDOR PARTNERSHIP */}
          <Route path="/vendor-partnership" element={<VendorPartnership />} />

          {/* BECOME PARTNER */}
          <Route path="/become-partner" element={<BecomePartner />} />

          {/* MSP SUPPORT */}
          <Route path="/msp-support" element={<MSPSupport />} />

          {/* MSP SUB PAGES */}
          <Route path="/discuss-priorities" element={<DiscussPriorities />} />

          <Route path="/connect-msp" element={<ConnectMSP />} />

          <Route path="/offshore-teams" element={<OffshoreTeams />} />

          <Route path="/development-team" element={<DevelopmentTeam />} />

          <Route
            path="/development-requirements"
            element={<DevelopmentRequirements />}
          />

          <Route path="/industries/education" element={<Education />} />
          <Route path="/industries/insurance" element={<Insurance />} />
          <Route path="/industries/finance" element={<Finance />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />

          <Route path="/education-solutions" element={<EducationSolutions />} />

          <Route path="/schedule-discovery" element={<ScheduleDiscovery />} />
          <Route
            path="/industries/information-technology"
            element={<InformationTechnology />}
          />

          <Route path="/industries/manufacturing" element={<Manufacturing />} />

          <Route path="/insurance-get-in-touch" element={<GetInTouch />} />

          <Route path="/finance-get-in-touch" element={<FinanceGetInTouch />} />

          <Route
            path="/healthcare-get-in-touch"
            element={<HealthcareGetInTouch />}
          />

          <Route path="/it-get-in-touch" element={<ITGetInTouch />} />
          <Route
            path="/manufacturing-get-in-touch"
            element={<ManufacturingGetInTouch />}
          />
          <Route
            path="/industries/telecommunications"
            element={<Telecommunications />}
          />
          <Route path="/industries/energy" element={<Energy />} />

          <Route
            path="/telecommunication-get-in-touch"
            element={<TcGetinTouch />}
          />

          <Route path="/energy-get-in-touch" element={<EnergyGetInTouch />} />
          <Route
            path="/industries/transportation"
            element={<Transportation />}
          />

          <Route
            path="/transportation-get-in-touch"
            element={<TransportationGetInTouch />}
          />

          <Route path="/industries/fmcg" element={<Fmcg />} />

          <Route path="/fmcg-get-in-touch" element={<FmcgGetInTouch />} />

          <Route path="/industries/e-commerce" element={<ECommerce />} />

          <Route
            path="/ecommerce-get-in-touch"
            element={<ECommerceGetInTouch />}
          />
          <Route path="/start-conversation" element={<StartConversation />} />
          <Route path="/explore-questions" element={<ExploreQuestions />} />
          <Route path="/conversation-toggle" element={<ConversationToggle />} />
          <Route path="/talk-to-expert" element={<TalkToExpert />} />
          {/* ================= ABOUT US ================= */}

          <Route path="/about-us" element={<AboutUs />} />

          {/* ================= LEADERSHIP ================= */}

          <Route path="/leadership" element={<AboutUs />} />

          <Route path="/idea" element={<Idea />} />

          <Route path="/partners-ecosystem" element={<PartnersEcosystem />} />

          {/* ================= ACCOUNTS (candidates + admins share one sign-in) ================= */}
          <Route path="/signin" element={<AccessPage initialTab="signin" />} />
          <Route path="/signup" element={<AccessPage initialTab="signup" />} />
          <Route element={<PermissionGate allowedRoles={["candidate"]} />}>
            <Route path="/candidate" element={<CandidateDashboard />} />
          </Route>
          <Route path="/careers" element={<Careers />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Route>

        {/* =================================================
            ADMIN DASHBOARD (login, signup, forgot password,
            dashboard + all content modules) - no site navbar/footer
        ================================================= */}
        {adminRoutes}
        <Route
          path="/admin"
          element={<Navigate to="/admin-dashboard" replace />}
        />
        <Route
          path="/dashboard"
          element={<Navigate to="/admin-dashboard" replace />}
        />
        <Route path="/login" element={<Navigate to="/signin" replace />} />
        {/* Unknown URL -> real "Page not found" page (noindex) instead of redirecting to Home */}
        <Route element={<MainLayout />}>
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Tumhare existing routes yahan rahenge */}
      </Routes>
      </Suspense>
    </>
  );
}
export default App;
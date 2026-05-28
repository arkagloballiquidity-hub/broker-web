#!/usr/bin/env python3
"""
ARKA Global Liquidity – Legal Document PDF Generator
Generates all 11 professional branded PDFs
"""

import os, shutil
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import mm
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_JUSTIFY, TA_CENTER
from reportlab.platypus import (
    BaseDocTemplate, Frame, PageTemplate,
    Paragraph, Spacer, Table, TableStyle,
    KeepTogether, HRFlowable
)

# ─────────────────────────────────────────────────────────────────────────────
# ARKA Brand Colors
# ─────────────────────────────────────────────────────────────────────────────
TEAL        = colors.Color(0/255,   186/255, 179/255)   # #00BAB3
CHAMPAGNE   = colors.Color(200/255, 169/255, 106/255)   # #C8A96A
DARK_BG     = colors.Color(8/255,   11/255,  16/255)    # #080B10
WHITE       = colors.white
LIGHT_GRAY  = colors.Color(139/255, 155/255, 174/255)   # #8B9BAE
NEAR_BLACK  = colors.Color(18/255,  22/255,  30/255)
INFO_BG     = colors.Color(247/255, 249/255, 251/255)
RULE_COLOR  = colors.Color(0/255,   186/255, 179/255,   0.25)
CHAMP_RULE  = colors.Color(200/255, 169/255, 106/255,   0.45)

# ─────────────────────────────────────────────────────────────────────────────
# Page geometry
# ─────────────────────────────────────────────────────────────────────────────
PAGE_W, PAGE_H = A4                  # 595.28 × 841.89 pt
M_LEFT    = 22 * mm
M_RIGHT   = 22 * mm
HEADER_H  = 54                       # points
FOOTER_H  = 30
M_TOP     = HEADER_H + 14
M_BOTTOM  = FOOTER_H + 14
CONTENT_W = PAGE_W - M_LEFT - M_RIGHT
CONTENT_H = PAGE_H - M_TOP - M_BOTTOM


# ─────────────────────────────────────────────────────────────────────────────
# Page decorator (header + footer drawn on canvas)
# ─────────────────────────────────────────────────────────────────────────────
def draw_page(canvas, doc):
    canvas.saveState()
    title    = getattr(doc, 'doc_title',    '')
    subtitle = getattr(doc, 'doc_subtitle', '')

    # ── Header dark bar ──────────────────────────────────────────────────────
    canvas.setFillColor(DARK_BG)
    canvas.rect(0, PAGE_H - HEADER_H, PAGE_W, HEADER_H, fill=1, stroke=0)

    # Teal accent stripe (left edge)
    canvas.setFillColor(TEAL)
    canvas.rect(0, PAGE_H - HEADER_H, 4.5 * mm, HEADER_H, fill=1, stroke=0)

    # "ARKA" logotype
    canvas.setFillColor(WHITE)
    canvas.setFont("Helvetica-Bold", 18)
    canvas.drawString(4.5 * mm + 9, PAGE_H - 29, "ARKA")

    # "GLOBAL LIQUIDITY" tagline
    canvas.setFillColor(TEAL)
    canvas.setFont("Helvetica-Bold", 6)
    canvas.drawString(4.5 * mm + 9, PAGE_H - 42, "GLOBAL LIQUIDITY")

    # Document title (right-aligned)
    canvas.setFillColor(WHITE)
    canvas.setFont("Helvetica-Bold", 9.5)
    tw = canvas.stringWidth(title, "Helvetica-Bold", 9.5)
    canvas.drawString(PAGE_W - M_RIGHT - tw, PAGE_H - 25, title)

    # Subtitle (right-aligned, smaller)
    canvas.setFillColor(LIGHT_GRAY)
    canvas.setFont("Helvetica", 6.8)
    sw = canvas.stringWidth(subtitle, "Helvetica", 6.8)
    canvas.drawString(PAGE_W - M_RIGHT - sw, PAGE_H - 39, subtitle)

    # Teal rule below header
    canvas.setStrokeColor(TEAL)
    canvas.setLineWidth(1.5)
    canvas.line(0, PAGE_H - HEADER_H, PAGE_W, PAGE_H - HEADER_H)

    # ── Footer ───────────────────────────────────────────────────────────────
    # Champagne rule above footer
    canvas.setStrokeColor(CHAMPAGNE)
    canvas.setLineWidth(0.5)
    canvas.line(M_LEFT, FOOTER_H + 12, PAGE_W - M_RIGHT, FOOTER_H + 12)

    # Footer company info
    canvas.setFillColor(LIGHT_GRAY)
    canvas.setFont("Helvetica", 6.8)
    canvas.drawString(M_LEFT, FOOTER_H + 2,
        "ARKA Global Liquidity Ltd.  ·  Reg. 2025-00568  ·  Saint Lucia  ·  www.arkaltd.io  ·  support@arkaltd.io")

    # Page number
    pn = f"Page {canvas.getPageNumber()}"
    canvas.setFont("Helvetica-Bold", 7)
    canvas.setFillColor(TEAL)
    pw = canvas.stringWidth(pn, "Helvetica-Bold", 7)
    canvas.drawString(PAGE_W - M_RIGHT - pw, FOOTER_H + 2, pn)

    canvas.restoreState()


# ─────────────────────────────────────────────────────────────────────────────
# Document template
# ─────────────────────────────────────────────────────────────────────────────
class ArkaDoc(BaseDocTemplate):
    def __init__(self, filepath, title, subtitle):
        self.doc_title    = title
        self.doc_subtitle = subtitle
        super().__init__(
            filepath, pagesize=A4,
            title=title,
            author="ARKA Global Liquidity Ltd.",
            subject=subtitle,
            creator="ARKA Legal Document Generator 2025",
            leftMargin=M_LEFT, rightMargin=M_RIGHT,
            topMargin=M_TOP,   bottomMargin=M_BOTTOM
        )
        frame = Frame(
            M_LEFT, M_BOTTOM, CONTENT_W, CONTENT_H,
            leftPadding=0, rightPadding=0,
            topPadding=0,  bottomPadding=0, id='main'
        )
        self.addPageTemplates([
            PageTemplate(id='main', frames=[frame], onPage=draw_page)
        ])


# ─────────────────────────────────────────────────────────────────────────────
# Styles
# ─────────────────────────────────────────────────────────────────────────────
def make_styles():
    S = {}

    S['intro_box'] = ParagraphStyle('intro_box',
        fontName='Helvetica-Oblique', fontSize=8.2,
        textColor=LIGHT_GRAY, leading=13,
        spaceBefore=0, spaceAfter=10,
        alignment=TA_JUSTIFY
    )
    S['section_head'] = ParagraphStyle('section_head',
        fontName='Helvetica-Bold', fontSize=10.5,
        textColor=TEAL, leading=14,
        spaceBefore=16, spaceAfter=6
    )
    S['subsection_head'] = ParagraphStyle('subsection_head',
        fontName='Helvetica-Bold', fontSize=9.5,
        textColor=CHAMPAGNE, leading=13,
        spaceBefore=10, spaceAfter=4
    )
    S['body'] = ParagraphStyle('body',
        fontName='Helvetica', fontSize=8.8,
        textColor=NEAR_BLACK, leading=14,
        alignment=TA_JUSTIFY, spaceBefore=0, spaceAfter=7
    )
    S['bullet'] = ParagraphStyle('bullet',
        fontName='Helvetica', fontSize=8.8,
        textColor=NEAR_BLACK, leading=13.5,
        leftIndent=16, firstLineIndent=0,
        spaceBefore=2, spaceAfter=2
    )
    S['lbl'] = ParagraphStyle('lbl',
        fontName='Helvetica-Bold', fontSize=7.8,
        textColor=LIGHT_GRAY, leading=11
    )
    S['val'] = ParagraphStyle('val',
        fontName='Helvetica', fontSize=8.5,
        textColor=NEAR_BLACK, leading=12
    )
    S['warn_box'] = ParagraphStyle('warn_box',
        fontName='Helvetica-BoldOblique', fontSize=8.5,
        textColor=NEAR_BLACK, leading=13,
        alignment=TA_JUSTIFY, spaceBefore=4, spaceAfter=8
    )
    return S


# ─────────────────────────────────────────────────────────────────────────────
# Helper builders
# ─────────────────────────────────────────────────────────────────────────────
def P(text, styles):
    return Paragraph(text, styles['body'])

def H(num, text, styles):
    return KeepTogether([
        Spacer(1, 4),
        Paragraph(f"{num}. {text}", styles['section_head']),
    ])

def bullets(items, styles):
    return [Paragraph(f"<bullet color='#{hex(int(TEAL.red*255))[2:].zfill(2)}{hex(int(TEAL.green*255))[2:].zfill(2)}{hex(int(TEAL.blue*255))[2:].zfill(2)}'>▸</bullet> {item}", styles['bullet'])
            for item in items]

def company_table(styles):
    data = [
        [Paragraph("Legal entity",          styles['lbl']), Paragraph("ARKA Global Liquidity Ltd.", styles['val'])],
        [Paragraph("Registration No.",       styles['lbl']), Paragraph("2025-00568",                 styles['val'])],
        [Paragraph("Jurisdiction",           styles['lbl']), Paragraph("Saint Lucia",                styles['val'])],
        [Paragraph("Website",                styles['lbl']), Paragraph("www.arkaltd.io",             styles['val'])],
        [Paragraph("General contact",        styles['lbl']), Paragraph("contacto@arkaltd.io",        styles['val'])],
        [Paragraph("Support / Compliance",   styles['lbl']), Paragraph("support@arkaltd.io",         styles['val'])],
        [Paragraph("Effective year",         styles['lbl']), Paragraph("2025",                       styles['val'])],
    ]
    col1 = 44 * mm
    col2 = CONTENT_W - col1 - 1 * mm
    t = Table(data, colWidths=[col1, col2])
    t.setStyle(TableStyle([
        ('BACKGROUND',   (0, 0), (-1, -1), INFO_BG),
        ('BOX',          (0, 0), (-1, -1), 0.75, TEAL),
        ('LINEBELOW',    (0, 0), (-1, -2), 0.3, colors.Color(0.82, 0.84, 0.87)),
        ('TOPPADDING',   (0, 0), (-1, -1), 5),
        ('BOTTOMPADDING',(0, 0), (-1, -1), 5),
        ('LEFTPADDING',  (0, 0), (-1, -1), 10),
        ('RIGHTPADDING', (0, 0), (-1, -1), 8),
        ('VALIGN',       (0, 0), (-1, -1), 'MIDDLE'),
    ]))
    return t

def section_rule():
    return HRFlowable(width=CONTENT_W, thickness=0.3,
                      color=colors.Color(0.85, 0.87, 0.90),
                      spaceAfter=0, spaceBefore=0)

INTRO_TEXT = ("This document is intended for publication on the Company website and forms part of the "
              "client-facing legal and operational disclosure framework.")


# ─────────────────────────────────────────────────────────────────────────────
# Document content builders
# ─────────────────────────────────────────────────────────────────────────────

def build_index(S):
    story = []
    story.append(Paragraph(INTRO_TEXT, S['intro_box']))
    story.append(company_table(S))
    story.append(Spacer(1, 14))

    story.append(H("", "Document Pack Contents", S))
    story[-1] = Paragraph("Document Pack Contents", S['section_head'])
    story.extend(bullets([
        "aml_kyc_policy.pdf  –  AML / KYC Policy",
        "complaints_policy.pdf  –  Complaints Policy",
        "conflicts_of_interest_policy.pdf  –  Conflicts of Interest Policy",
        "cookie_policy.pdf  –  Cookie Policy",
        "deposits_and_withdrawals_policy.pdf  –  Deposits & Withdrawals Policy",
        "leverage_and_margin_policy.pdf  –  Leverage & Margin Policy",
        "order_execution_policy.pdf  –  Order Execution Policy",
        "privacy_policy.pdf  –  Privacy Policy",
        "risk_warning.pdf  –  Risk Warning",
        "terms_and_conditions.pdf  –  Terms & Conditions",
    ], S))
    story.append(Spacer(1, 12))

    story.append(Paragraph("Key Platform Parameters Reflected", S['section_head']))
    story.extend(bullets([
        "Maximum leverage: 1:200",
        "First margin call level: 150%",
        "Stop-out level: 80%",
        "Stop-out type: SMART for RAW LIQUIDITY and STD LIQUIDITY",
        "Execution profile: Book A",
        "Products: RAW LIQUIDITY and STD LIQUIDITY",
        "Deposit currency: USD",
        "Negative balance protection: Disabled unless expressly stated otherwise in writing",
        "Trading instruments configured: Forex, spot metals, spot energies, indices, crypto currencies, shares USA/EU/Asia, ETF CFDs, NDFs, CNXHKD and S30SGD.",
    ], S))
    story.append(Spacer(1, 14))

    story.append(Paragraph("Publication Notes", S['section_head']))
    story.append(P("This pack is prepared as an institutional draft for publication on the Company website. "
                   "Before publication, legal counsel should verify that all settings, claims, jurisdictional "
                   "restrictions and operational policies match the live platform and provider agreements.", S))
    story.append(Spacer(1, 18))
    story.append(P("For questions regarding this document, contact support@arkaltd.io or contacto@arkaltd.io.", S))
    return story


def build_aml(S):
    story = []
    story.append(Paragraph(INTRO_TEXT, S['intro_box']))
    story.append(company_table(S))
    story.append(Spacer(1, 14))

    story.append(H(1, "Introduction", S))
    story.append(P("ARKA Global Liquidity Ltd. is an International Business Company incorporated in Saint Lucia under registration number 2025-00568. These documents apply to the website www.arkaltd.io, the trading environment branded as ARKA Global cTrader, and any related services made available by the Company.", S))
    story.append(P("The Company is committed to applying internal anti-money laundering, counter-terrorist financing, sanctions screening, fraud prevention and know-your-customer procedures consistent with international standards and risk-based controls.", S))

    story.append(H(2, "Client Verification", S))
    story.append(P("Before or during the business relationship, the Company may request documentation and information to verify identity, address, legal capacity, ownership, payment method ownership, source of funds, source of wealth and transaction purpose. Verification may be required for individuals and legal entities.", S))

    story.append(H(3, "Verification Levels", S))
    story.extend(bullets([
        "<b>Registered:</b> basic account registration information has been provided.",
        "<b>Verified:</b> proof of identity and proof of address have been reviewed, and basic trading or withdrawal access may be permitted according to internal policy.",
        "<b>Verified Plus:</b> additional proof of funds, source of wealth or enhanced due diligence documents have been provided, allowing extended services or higher limits where approved.",
    ], S))

    story.append(H(4, "Required Documents", S))
    story.extend(bullets([
        "Government-issued identification such as passport, national ID or driving license.",
        "Selfie or liveness check where required.",
        "Proof of address such as utility bill, bank statement or government-issued document dated within the requested period.",
        "Proof of funds or source of wealth such as bank statements, income evidence, business records or other relevant documentation.",
        "Corporate documents, beneficial ownership records, director registers, authorization documents and corporate structure information for legal entities.",
    ], S))

    story.append(H(5, "Ongoing Monitoring", S))
    story.append(P("The Company may monitor transactions, account behavior, deposits, withdrawals, trading activity, device data, payment methods and jurisdictional indicators to detect suspicious, unusual or high-risk activity. The Company may request updated documents at any time.", S))

    story.append(H(6, "Prohibition of Third-Party Payments", S))
    story.append(P("Deposits and withdrawals must generally be made only from and to accounts, wallets, cards or payment methods held in the Client's own name. Third-party payments are prohibited unless expressly approved in writing and supported by sufficient documentation.", S))

    story.append(H(7, "Suspicious Activity", S))
    story.append(P("If suspicious activity is detected, the Company may investigate, request documents, block or restrict accounts, reject transactions, suspend withdrawals, close accounts, cancel transactions, adjust balances or report information to competent authorities where required. The Company is not obligated to disclose details of suspicious activity investigations where disclosure could prejudice compliance or legal obligations.", S))

    story.append(H(8, "Restricted Jurisdictions and Sanctions", S))
    story.append(P("The Company does not provide services to persons or entities located in jurisdictions restricted by the Company, sanctions lists, provider restrictions, applicable law or internal risk policy. The Company may close or restrict accounts where jurisdictional risk is identified.", S))

    story.append(H(9, "Recordkeeping", S))
    story.append(P("The Company may retain AML/KYC records, transaction records, communications and due diligence documents for at least five years after account closure or termination, or longer where required by law, internal policy or legitimate business purposes.", S))

    story.append(H(10, "Client Obligations", S))
    story.append(P("Clients must provide accurate, complete and current information, cooperate with verification, avoid illegal activity, confirm lawful source of funds and notify the Company of material changes. Failure to comply may result in rejection, suspension, termination or reporting.", S))

    story.append(Spacer(1, 16))
    story.append(P("For questions regarding this document, contact support@arkaltd.io or contacto@arkaltd.io.", S))
    return story


def build_complaints(S):
    story = []
    story.append(Paragraph(INTRO_TEXT, S['intro_box']))
    story.append(company_table(S))
    story.append(Spacer(1, 14))

    story.append(H(1, "Introduction", S))
    story.append(P("ARKA Global Liquidity Ltd. is an International Business Company incorporated in Saint Lucia under registration number 2025-00568. These documents apply to the website www.arkaltd.io, the trading environment branded as ARKA Global cTrader, and any related services made available by the Company.", S))
    story.append(P("This Complaints Policy explains how the Company handles client complaints, disputes, claims and service-related concerns. The purpose is to provide a clear, fair and structured process for receiving, reviewing, escalating and responding to complaints.", S))

    story.append(H(2, "What Is a Complaint?", S))
    story.append(P("A complaint is a formal expression of dissatisfaction submitted by a Client regarding services, conduct, execution, account handling, transactions, deposits, withdrawals, fees, platform access or any other matter related to the Company services. Routine questions or support requests may not be treated as formal complaints unless clearly identified or escalated.", S))

    story.append(H(3, "How to Submit a Complaint", S))
    story.append(P("Complaints must be submitted in writing to <b>support@arkaltd.io</b>. The subject line should include: <i>Formal Complaint – Client Name – Account Number</i>. The complaint must include sufficient information for investigation.", S))

    story.append(H(4, "Required Information", S))
    story.extend(bullets([
        "Full name, account number or client ID and registered email address.",
        "Date and time of the incident.",
        "Affected instrument, order, position, transaction or withdrawal.",
        "Ticket numbers, transaction IDs, platform references or blockchain hashes where applicable.",
        "Detailed explanation, supporting evidence, screenshots, statements or documents.",
        "Specific outcome requested by the Client.",
    ], S))

    story.append(H(5, "Time Limit", S))
    story.append(P("Clients should submit complaints as soon as possible after becoming aware of the issue. Complaints related to trading activity, execution, pricing, deposits, withdrawals or account operations should be submitted within five business days from the date the Client became aware, or should reasonably have become aware, of the relevant event. Late complaints may be rejected if the delay prevents proper investigation.", S))

    story.append(H(6, "Acknowledgment and Review", S))
    story.append(P("The Company will seek to acknowledge receipt within a reasonable time and may request additional information. The review may include account records, platform logs, transaction history, communication records, liquidity provider data, payment provider data, internal departments and applicable policies.", S))

    story.append(H(7, "Response Timeline", S))
    story.append(P("As an internal operating standard, the Company may aim to review complaints within approximately five business days after receiving the last required document or clarification. Complex complaints may require additional time, especially when external providers, payment processors, technology vendors, legal counsel or compliance review are involved.", S))

    story.append(H(8, "Possible Outcomes", S))
    story.extend(bullets([
        "Accept the complaint fully or partially.",
        "Reject the complaint with explanation.",
        "Offer an adjustment or correct an error.",
        "Request additional information.",
        "Escalate internally to senior support, compliance, risk, legal or management.",
        "Take remedial action where appropriate.",
    ], S))

    story.append(H(9, "Account Restrictions During Review", S))
    story.append(P("Where necessary, the Company may temporarily restrict trading, deposits, withdrawals, account access or other services while a complaint, dispute, compliance review or security investigation is pending.", S))

    story.append(H(10, "Professional Communications", S))
    story.append(P("Complaints must be submitted respectfully and professionally. The Company may reject, suspend or refuse communications containing threats, abusive language, harassment, false statements, fraudulent claims or repeated complaints already resolved.", S))

    story.append(Spacer(1, 16))
    story.append(P("For questions regarding this document, contact support@arkaltd.io or contacto@arkaltd.io.", S))
    return story


def build_conflicts(S):
    story = []
    story.append(Paragraph(INTRO_TEXT, S['intro_box']))
    story.append(company_table(S))
    story.append(Spacer(1, 14))

    story.append(H(1, "Introduction", S))
    story.append(P("ARKA Global Liquidity Ltd. is an International Business Company incorporated in Saint Lucia under registration number 2025-00568. These documents apply to the website www.arkaltd.io, the trading environment branded as ARKA Global cTrader, and any related services made available by the Company.", S))
    story.append(P("This policy explains how the Company identifies, manages, mitigates and discloses conflicts of interest that may arise in connection with services provided to clients.", S))

    story.append(H(2, "What Is a Conflict of Interest?", S))
    story.append(P("A conflict of interest may arise when the interests of the Company, its directors, employees, agents, affiliates, service providers, introducing brokers, or other clients differ from or compete with the interests of a client. A conflict does not automatically mean improper conduct has occurred, but it must be managed professionally.", S))

    story.append(H(3, "Potential Sources of Conflicts", S))
    story.extend(bullets([
        "The Company may benefit financially from client trading activity through spreads, markups, commissions, swaps, administrative fees or other charges.",
        "The Company may act as intermediary, liquidity arranger, risk manager, matched-principal or counterparty depending on account type, instrument and execution structure.",
        "The Company may route orders to selected liquidity providers or technology vendors.",
        "The Company may have relationships with introducing brokers, affiliates, money managers, payment providers or other commercial partners.",
        "Different clients may receive different pricing, commissions, leverage, margin or trading conditions based on product group, account type, volume, jurisdiction or risk profile.",
    ], S))

    story.append(H(4, "Execution-Related Conflicts", S))
    story.append(P("The platform configuration indicates Book A execution for the RAW LIQUIDITY and STD LIQUIDITY products. Even where external execution or liquidity is used, conflicts may arise from liquidity selection, spreads, markups, routing, provider relationships, execution speed or operational risk management.", S))

    story.append(H(5, "Remuneration and Incentives", S))
    story.append(P("The Company, its affiliates, employees, introducers or partners may receive remuneration related to client activity, including spreads, markups, commissions, referral fees, introducing broker commissions, service fees, technology fees or related compensation. The Company seeks to ensure that such remuneration does not improperly compromise fair treatment of clients.", S))

    story.append(H(6, "Employees and Confidential Information", S))
    story.append(P("Employees, directors, officers and contractors must avoid misuse of confidential information, preferential treatment, unauthorized disclosure, conflicts involving gifts or inducements, personal trading conflicts and outside business interests that may impair their duties.", S))

    story.append(H(7, "Management Measures", S))
    story.extend(bullets([
        "Internal policies and procedures.",
        "Segregation of duties and access controls.",
        "Confidentiality rules.",
        "Review of third-party relationships.",
        "Order handling and pricing controls.",
        "Monitoring of suspicious or abusive activity.",
        "Escalation to compliance, risk, legal or management when necessary.",
        "Disclosure of conflicts where controls may not be sufficient.",
    ], S))

    story.append(H(8, "Disclosure and Refusal to Act", S))
    story.append(P("Where the Company determines that a conflict cannot be adequately managed, it may disclose the general nature or source of the conflict, decline to provide a service, reject a transaction, restrict an account, terminate a relationship or take other appropriate measures.", S))

    story.append(H(9, "Client Responsibility", S))
    story.append(P("Clients are responsible for reviewing the Company legal documents and understanding the nature of the services, pricing, remuneration, execution model and potential conflicts. Clients should seek independent financial, legal or tax advice where necessary.", S))

    story.append(Spacer(1, 16))
    story.append(P("For questions regarding this document, contact support@arkaltd.io or contacto@arkaltd.io.", S))
    return story


def build_cookie(S):
    story = []
    story.append(Paragraph(INTRO_TEXT, S['intro_box']))
    story.append(company_table(S))
    story.append(Spacer(1, 14))

    story.append(H(1, "Introduction", S))
    story.append(P("ARKA Global Liquidity Ltd. is an International Business Company incorporated in Saint Lucia under registration number 2025-00568. These documents apply to the website www.arkaltd.io, the trading environment branded as ARKA Global cTrader, and any related services made available by the Company.", S))
    story.append(P("This Cookie Policy explains how the Company uses cookies and similar technologies when a user accesses or uses the website. It should be read together with the Privacy Policy, Terms and Conditions, Risk Warning, AML/KYC Policy and any other legal documents made available by the Company.", S))

    story.append(H(2, "What Are Cookies?", S))
    story.append(P("Cookies are small text files placed on a device when a user visits a website. They allow a website to recognize the device, maintain sessions, remember preferences, support security, analyze traffic and improve functionality. Cookies may be session cookies, persistent cookies, first-party cookies or third-party cookies.", S))

    story.append(H(3, "Types of Cookies We May Use", S))
    story.extend(bullets([
        "<b>Strictly necessary cookies</b> used for login, security, session management, fraud prevention, load balancing and cookie preference storage.",
        "<b>Functional cookies</b> used to remember language, interface, region or form preferences.",
        "<b>Analytics and performance cookies</b> used to understand website traffic, pages visited, performance issues, devices, browsers and approximate location.",
        "<b>Marketing and communication cookies</b> used, where legally permitted, to measure campaign performance or deliver relevant communications.",
        "<b>Security and compliance cookies</b> used to support fraud detection, device recognition, abuse prevention, website integrity and AML/KYC risk controls.",
    ], S))

    story.append(H(4, "Similar Technologies", S))
    story.append(P("The Company may also use pixels, tags, local storage, session storage, device identifiers and server logs for similar purposes, including security, analytics, performance measurement, user experience improvement and compliance monitoring.", S))

    story.append(H(5, "Third-Party Cookies", S))
    story.append(P("Some cookies may be placed by third-party service providers supporting hosting, analytics, security, CRM, communication or marketing infrastructure. Such third parties may process information according to their own privacy and cookie policies. The Company takes reasonable steps to work with providers that maintain appropriate data protection and security standards.", S))

    story.append(H(6, "Managing Cookies and Consent", S))
    story.append(P("Most browsers allow users to view, delete, block or restrict cookies. Disabling certain cookies may affect website functionality, security or performance. Where applicable law requires consent for non-essential cookies, the Company may provide a cookie banner or preference mechanism. Strictly necessary cookies may be placed without prior consent when required for website operation or security.", S))

    story.append(H(7, "Data and Retention", S))
    story.append(P("Depending on the cookie type, data collected may include IP address, device type, browser type, operating system, session identifiers, date and time of access, approximate location and website interaction data. Cookie data is retained only for as long as reasonably necessary for the purposes described in this policy, unless a longer period is required for legal, compliance, security or operational reasons.", S))

    story.append(H(8, "Updates", S))
    story.append(P("The Company may amend this Cookie Policy at any time by publishing an updated version on the website. Continued use of the website after publication constitutes acknowledgment of the revised policy.", S))

    story.append(Spacer(1, 16))
    story.append(P("For questions regarding this document, contact support@arkaltd.io or contacto@arkaltd.io.", S))
    return story


def build_deposits(S):
    story = []
    story.append(Paragraph(INTRO_TEXT, S['intro_box']))
    story.append(company_table(S))
    story.append(Spacer(1, 14))

    story.append(H(1, "Introduction", S))
    story.append(P("ARKA Global Liquidity Ltd. is an International Business Company incorporated in Saint Lucia under registration number 2025-00568. These documents apply to the website www.arkaltd.io, the trading environment branded as ARKA Global cTrader, and any related services made available by the Company.", S))
    story.append(P("This policy explains the rules, procedures, limitations and compliance requirements applicable to deposits and withdrawals made by clients of the Company.", S))

    story.append(H(2, "General Principles", S))
    story.append(P("The Company applies deposit and withdrawal procedures designed to protect client accounts, prevent fraud, comply with AML/KYC obligations, verify source of funds, avoid third-party payments, maintain accurate records and reduce operational and financial crime risk.", S))

    story.append(H(3, "Account Verification", S))
    story.append(P("Clients may be required to complete identity verification before deposits or withdrawals are processed. Verification may include proof of identity, proof of address, selfie or liveness verification, proof of funds, source of wealth, bank statement, wallet ownership verification, payment method ownership verification, corporate documents and any other information requested by the Company.", S))

    story.append(H(4, "Deposits", S))
    story.append(P("The platform configuration indicates USD as the live and demo deposit currency. Accepted funding methods may vary depending on jurisdiction, account type, currency, payment provider availability, compliance requirements and operational risk. The Company may modify, suspend, remove or add deposit methods at any time.", S))

    story.append(H(5, "No Cash or Third-Party Payments", S))
    story.append(P("The Company does not accept physical cash deposits or cash-equivalent transactions unless expressly approved in writing and permitted by applicable law and compliance procedures. Deposits and withdrawals must originate from, and be paid to, accounts, wallets, cards or payment methods held in the Client's own name. Third-party deposits and withdrawals are prohibited unless expressly approved in writing and supported by documentation establishing a legitimate legal basis.", S))

    story.append(H(6, "Withdrawal to Original Source", S))
    story.append(P("Where possible, withdrawals must be made to the same account, wallet, card or payment method used for the original deposit. If withdrawal to the original source is not possible, the Company may require additional documentation before approving an alternative method.", S))

    story.append(H(7, "Processing Times", S))
    story.append(P("Withdrawal requests may be processed within approximately 2–3 business days after all required information and documentation have been received and approved, unless further review is required. This timeframe is indicative and not a guarantee. Delays may occur due to banks, payment processors, blockchain networks, public holidays, third-party providers, technical issues or compliance reviews.", S))

    story.append(H(8, "Fees and Currency Conversion", S))
    story.append(P("Deposits and withdrawals may be subject to bank fees, payment processor fees, blockchain network fees, card provider fees, currency conversion fees, intermediary charges and Company fees where disclosed or permitted. Conversion rates may differ from market rates shown elsewhere and may include spreads, charges or markups.", S))

    story.append(H(9, "Open Positions and Margin", S))
    story.append(P("Withdrawals may be refused, delayed or reduced if the Client has open positions or insufficient free margin. The Company may reject a withdrawal request if processing it could create margin deficiency, forced liquidation, negative balance risk or operational risk.", S))

    story.append(H(10, "Suspicious Activity and Restrictions", S))
    story.append(P("The Company may delay, reject, investigate, freeze or reverse deposits or withdrawals where suspicious activity is detected. Suspicious activity may include identity mismatch, third-party payments, inconsistent source of funds, chargebacks, payment reversals, restricted jurisdictions, high-risk blockchain exposure, fraud indicators or attempts to avoid AML/KYC controls.", S))

    story.append(H(11, "Crypto Transactions", S))
    story.append(P("Where crypto deposits or withdrawals are supported, blockchain transactions may be irreversible. The Client is responsible for selecting the correct network, providing the correct wallet address, ensuring wallet compatibility, understanding network fees, avoiding high-risk wallets and maintaining wallet security.", S))

    story.append(H(12, "Recordkeeping", S))
    story.append(P("The Company may retain records of deposits, withdrawals, client documentation, communications and transaction history for legal, compliance, AML/KYC, operational and security purposes after account closure where required or permitted.", S))

    story.append(Spacer(1, 16))
    story.append(P("For questions regarding this document, contact support@arkaltd.io or contacto@arkaltd.io.", S))
    return story


def build_leverage(S):
    story = []
    story.append(Paragraph(INTRO_TEXT, S['intro_box']))
    story.append(company_table(S))
    story.append(Spacer(1, 14))

    story.append(H(1, "Introduction", S))
    story.append(P("ARKA Global Liquidity Ltd. is an International Business Company incorporated in Saint Lucia under registration number 2025-00568. These documents apply to the website www.arkaltd.io, the trading environment branded as ARKA Global cTrader, and any related services made available by the Company.", S))
    story.append(P("This policy explains the principles, risks, requirements and procedures related to leverage, margin, margin calls, stop-out, liquidation and negative balance risk applicable to accounts held with the Company. Confirmed platform parameters: maximum leverage 1:200, first margin call level 150%, stop-out level 80%.", S))

    story.append(H(2, "What Is Leverage?", S))
    story.append(P("Leverage allows a Client to control a position larger than the funds deposited in the trading account. The maximum leverage currently confirmed for the platform is 1:200. Leverage magnifies both potential profits and potential losses. Small market movements may significantly affect account equity.", S))

    story.append(H(3, "What Is Margin?", S))
    story.append(P("Margin is the amount of funds required to open and maintain a leveraged position. It is not a fee. It is collateral allocated from account equity to support open positions. Required margin depends on instrument, position size, leverage, account type, volatility, liquidity and Company risk settings.", S))

    story.append(H(4, "Margin Level and Free Margin", S))
    story.append(P("Margin Level is commonly calculated as Equity / Used Margin × 100. Free Margin is commonly calculated as Equity − Used Margin. Declining margin level may indicate that the account is approaching margin call or stop-out thresholds.", S))

    story.append(H(5, "Margin Call", S))
    story.append(P("The first margin call level is currently set at 150%. A margin call may serve as a warning that the Client should deposit additional funds, reduce exposure, close positions or otherwise manage risk. The Company is not obligated to provide a separate margin call notice before liquidating positions. Platform notifications, account metrics or automated alerts may serve as notice.", S))

    story.append(H(6, "Stop-Out", S))
    story.append(P("The stop-out level is currently set at 80%. If margin level falls below the stop-out threshold, positions may be closed sequentially or partially according to platform rules until margin level improves. The cTrader group configuration uses SMART stop-out for RAW LIQUIDITY and STD LIQUIDITY products. Stop-out does not guarantee that losses will be limited to available account balance.", S))

    story.append(H(7, "Instrument-Specific Leverage", S))
    # NOTE: "B2Broker specification" replaced with neutral language
    story.append(P("The Company may apply different leverage or margin requirements by instrument. The current configuration notes leverage up to 1:200 for Forex and 1:100 for indices at group level. cTrader applies the lower of the account leverage and the group or instrument leverage. Other asset classes may be subject to the Company's current trading conditions and applicable instrument specifications.", S))

    story.append(H(8, "Changes to Leverage and Margin", S))
    story.append(P("The Company may change leverage or margin requirements at any time, including without prior notice, due to market volatility, news events, liquidity conditions, instrument risk, account behavior, provider requirements, holidays, corporate actions, legal developments or internal risk decisions.", S))

    story.append(H(9, "Negative Balance Risk", S))
    story.append(P("Negative balance protection is currently: Disabled unless expressly stated otherwise in writing. Leveraged trading may result in losses exceeding the account balance, especially during extreme volatility, gaps, illiquidity, technical failures or abnormal market conditions. Unless expressly stated in writing, the Company does not guarantee that an account cannot become negative.", S))

    story.append(H(10, "Hedging and Stop-Loss Orders", S))
    story.append(P("Where the platform supports hedging, opposite positions may still require margin and do not eliminate risk. Stop-loss orders are risk management tools but are not guaranteed; they may execute at worse prices during gaps, volatility, market opening, news events or low liquidity.", S))

    story.append(H(11, "Liquidation and Restrictions", S))
    story.append(P("The Company may close, liquidate, reduce or offset positions without prior notice if margin level falls below required thresholds, the account has insufficient equity, market conditions are abnormal, liquidity is limited, the Client breaches trading conditions, abusive trading is detected, documentation is missing, or a compliance or legal issue arises.", S))

    story.append(H(12, "No Guarantee of Risk Limitation", S))
    story.append(P("Margin systems, stop-out, stop-loss orders, alerts and platform metrics are not guarantees against loss. Clients may lose all deposited funds and, in certain circumstances, may incur additional liabilities. Clients should not trade with funds they cannot afford to lose.", S))

    story.append(Spacer(1, 16))
    story.append(P("For questions regarding this document, contact support@arkaltd.io or contacto@arkaltd.io.", S))
    return story


def build_order_execution(S):
    story = []
    story.append(Paragraph(INTRO_TEXT, S['intro_box']))
    story.append(company_table(S))
    story.append(Spacer(1, 14))

    story.append(H(1, "Introduction", S))
    story.append(P("ARKA Global Liquidity Ltd. is an International Business Company incorporated in Saint Lucia under registration number 2025-00568. These documents apply to the website www.arkaltd.io, the trading environment branded as ARKA Global cTrader, and any related services made available by the Company.", S))
    story.append(P("This Order Execution Policy explains how the Company executes, processes, routes, transmits or otherwise handles client orders through ARKA Global cTrader. The configured product groups are RAW LIQUIDITY and STD LIQUIDITY.", S))

    story.append(H(2, "Scope", S))
    story.append(P("This policy applies when the Company receives or handles client orders through online platforms, client portals, electronic systems, APIs or other approved methods of order submission. Unless expressly agreed otherwise in writing, all client orders are subject to this policy and applicable trading conditions.", S))

    story.append(H(3, "Instruments", S))
    story.extend(bullets([
        "Foreign exchange and contracts for difference (CFDs).",
        "Spot metals, spot energies, indices, commodities, crypto-related instruments, shares CFDs, ETF CFDs, NDFs, and other instruments made available by the Company.",
        "Leveraged instruments settled in cash unless expressly stated otherwise.",
    ], S))

    story.append(H(4, "Execution Model", S))
    story.append(P("The cTrader configuration for the platform indicates an execution profile of Book A for the RAW LIQUIDITY and STD LIQUIDITY products. The Company may use external liquidity providers, market data sources, aggregation systems, technology vendors or internal risk management arrangements depending on the instrument, account type and operational model.", S))

    story.append(H(5, "Execution Factors", S))
    story.extend(bullets([
        "Price.",
        "Costs, commissions, spreads, markups, swaps or administrative fees.",
        "Speed of execution.",
        "Likelihood of execution and settlement.",
        "Order size and order type.",
        "Market liquidity, volatility and available liquidity providers.",
        "Technology infrastructure and any other factor relevant to the order.",
    ], S))

    story.append(H(6, "Price Formation", S))
    story.append(P("Prices displayed on the platform may be derived from one or more liquidity providers, market data sources, internal pricing engines, aggregation systems or third-party technology providers. Quoted prices may include spreads, markups, commissions, financing charges, swaps or other costs. Prices displayed by the Company may differ from prices available on other platforms, venues, exchanges, brokers or liquidity providers.", S))

    story.append(H(7, "Order Types", S))
    story.append(P("The Company may support market orders, limit orders, stop orders, stop-loss orders, take-profit orders, pending orders, trailing stops and other order types supported by the platform. Availability depends on platform, instrument, liquidity and account configuration.", S))

    story.append(H(8, "Slippage, Gaps and Volatility", S))
    story.append(P("Slippage is the difference between the expected order price and the actual execution price. Slippage may be positive or negative and may occur due to market volatility, low liquidity, price gaps, news releases, technical latency, market openings or large order size. Stop-loss orders are not guaranteed to limit losses to the requested amount.", S))

    story.append(H(9, "Rejections, Partial Fills and Suspensions", S))
    story.append(P("Orders may be rejected, cancelled or partially filled if liquidity is insufficient, the requested price is unavailable, margin is insufficient, the market is closed, a technical issue occurs, the order violates trading conditions, or activity is identified as abusive, manipulative or suspicious.", S))

    story.append(H(10, "Manifest Errors and Off-Market Prices", S))
    story.append(P("The Company may cancel, amend, adjust or correct transactions affected by manifest pricing errors, off-market quotes, system errors, platform malfunction, data feed errors, abnormal spikes, latency abuse or fraudulent activity.", S))

    story.append(H(11, "Prohibited Practices", S))
    story.extend(bullets([
        "Latency arbitrage, price feed manipulation, quote stuffing, abusive scalping, platform abuse or exploitation of off-market prices.",
        "High-frequency trading, arbitrage or automated methods where prohibited or disruptive to platform stability.",
        "Coordinated trading abuse, unauthorized software, reverse engineering or activity that creates technical or operational risk.",
    ], S))

    story.append(H(12, "Technology and Force Majeure", S))
    story.append(P("Execution depends on internet connectivity, servers, data feeds, trading platforms and third-party systems. During abnormal market conditions, liquidity disruption, cybersecurity events, provider failures or force majeure events, the Company may restrict trading, modify conditions, close positions, cancel orders, adjust margin or take any action considered appropriate to protect clients, the Company and market integrity.", S))

    story.append(Spacer(1, 16))
    story.append(P("For questions regarding this document, contact support@arkaltd.io or contacto@arkaltd.io.", S))
    return story


def build_privacy(S):
    story = []
    story.append(Paragraph(INTRO_TEXT, S['intro_box']))
    story.append(company_table(S))
    story.append(Spacer(1, 14))

    story.append(H(1, "Introduction", S))
    story.append(P("ARKA Global Liquidity Ltd. is an International Business Company incorporated in Saint Lucia under registration number 2025-00568. These documents apply to the website www.arkaltd.io, the trading environment branded as ARKA Global cTrader, and any related services made available by the Company.", S))
    story.append(P("This Privacy Policy explains how the Company collects, processes, stores, uses, transfers and protects personal data when users access the website, open accounts or use services. The Company acts as data controller where it determines the purposes and means of processing personal data.", S))

    story.append(H(2, "Personal Data We Collect", S))
    story.extend(bullets([
        "Contact information such as name, address, email and phone.",
        "Account information such as username, account number, platform identifiers and authentication data.",
        "Financial information such as payment details, bank account data, trading activity, transaction history and charges.",
        "Identity verification data such as government ID, passport, proof of residence, selfies, liveness checks and KYC information.",
        "Source of funds, source of wealth, financial status and due diligence information.",
        "Device and usage data such as IP address, browser, operating system, device identifiers, logs, login dates, pages viewed and website activity.",
    ], S))

    story.append(H(3, "How We Use Personal Data", S))
    story.extend(bullets([
        "To open, maintain and administer accounts.",
        "To process transactions, deposits and withdrawals.",
        "To verify identity and perform AML/KYC checks.",
        "To detect, investigate and prevent fraud, abuse, unauthorized activity and financial crime.",
        "To provide customer support and service communications.",
        "To operate, secure and improve the website and platforms.",
        "To comply with legal, regulatory, tax, accounting, recordkeeping and contractual obligations.",
        "To protect the Company's rights, property, systems, clients and personnel.",
    ], S))

    story.append(H(4, "Legal Bases and Disclosures", S))
    story.append(P("The Company may process personal data where necessary for contract performance, compliance with legal obligations, legitimate business interests, consent, fraud prevention, security, legal claims or vital interests. Personal data may be shared with payment providers, banks, technology vendors, hosting providers, CRM providers, compliance vendors, professional advisers, affiliates, legal authorities, regulators or law enforcement where necessary or required.", S))

    story.append(H(5, "International Transfers", S))
    story.append(P("Personal data may be transferred internationally to support account administration, technology infrastructure, payment processing, compliance review, support or legal obligations. The Company will use reasonable safeguards where required by applicable data protection laws.", S))

    story.append(H(6, "Cookies", S))
    story.append(P("The website may use cookies and similar technologies. Details are provided in the Cookie Policy available on the website.", S))

    story.append(H(7, "Security", S))
    story.append(P("The Company uses reasonable technical and organizational measures designed to protect personal data, including access controls, password-protected systems, encryption where appropriate, secure transmission, limited access and internal confidentiality obligations. No system can be guaranteed fully secure.", S))

    story.append(H(8, "Retention", S))
    story.append(P("The Company retains personal data for as long as necessary for the purposes described in this policy, including legal, compliance, AML/KYC, tax, accounting, operational and dispute resolution purposes. Certain records may be retained for at least five years after account closure or termination where required by compliance obligations.", S))

    story.append(H(9, "Data Subject Rights", S))
    story.append(P("Depending on applicable law, users may have rights to access, correct, update, delete, restrict or object to processing, withdraw consent or request portability of personal data. Requests may be sent to support@arkaltd.io. The Company may request additional information to verify identity before processing a request.", S))

    story.append(H(10, "Updates", S))
    story.append(P("The Company may update this Privacy Policy at any time by publishing an updated version on the website. Users are encouraged to review it periodically.", S))

    story.append(Spacer(1, 16))
    story.append(P("For questions regarding this document, contact support@arkaltd.io or contacto@arkaltd.io.", S))
    return story


def build_risk_warning(S):
    story = []
    story.append(Paragraph(INTRO_TEXT, S['intro_box']))
    story.append(company_table(S))
    story.append(Spacer(1, 14))

    # Risk warning highlighted box
    warn_style = ParagraphStyle('warn',
        fontName='Helvetica-Bold', fontSize=9,
        textColor=NEAR_BLACK, leading=14,
        alignment=TA_JUSTIFY, spaceBefore=0, spaceAfter=0,
        leftIndent=10, rightIndent=10
    )
    warn_data = [[
        Paragraph("⚠  Trading leveraged financial products involves a high level of risk to your capital. "
                  "You may lose part or all of your invested funds. Only trade with money you can afford to lose. "
                  "This Risk Warning does not disclose all risks. Seek independent financial advice if necessary.", warn_style)
    ]]
    warn_table = Table(warn_data, colWidths=[CONTENT_W])
    warn_table.setStyle(TableStyle([
        ('BACKGROUND',    (0,0), (-1,-1), colors.Color(200/255, 169/255, 106/255, 0.10)),
        ('BOX',           (0,0), (-1,-1), 1.0, CHAMPAGNE),
        ('TOPPADDING',    (0,0), (-1,-1), 10),
        ('BOTTOMPADDING', (0,0), (-1,-1), 10),
        ('LEFTPADDING',   (0,0), (-1,-1), 12),
        ('RIGHTPADDING',  (0,0), (-1,-1), 12),
    ]))
    story.append(warn_table)
    story.append(Spacer(1, 14))

    story.append(H(1, "Introduction", S))
    story.append(P("ARKA Global Liquidity Ltd. is an International Business Company incorporated in Saint Lucia under registration number 2025-00568. These documents apply to the website www.arkaltd.io, the trading environment branded as ARKA Global cTrader, and any related services made available by the Company.", S))
    story.append(P("This Risk Warning provides a summary of important risks associated with trading leveraged financial products through the Company. It is not exhaustive. Clients should not trade unless they understand the nature of the products, the risks involved and their own financial capacity to bear losses.", S))

    story.append(H(2, "High-Risk Products", S))
    story.extend(bullets([
        "Foreign exchange and contracts for difference (CFDs).",
        "Spot metals, spot energies, indices, commodities, crypto-related instruments, shares CFDs, ETF CFDs, NDFs, and other instruments made available by the Company.",
        "Leveraged instruments settled in cash unless expressly stated otherwise.",
    ], S))
    story.append(P("These products can be highly volatile and may not be suitable for all investors. Trading involves a high risk to capital and may result in the loss of all deposited funds.", S))

    story.append(H(3, "Leverage Risk", S))
    story.append(P("The maximum leverage currently confirmed for the platform is 1:200. Leverage magnifies both gains and losses. A small adverse price movement can result in a significant loss relative to the capital deposited.", S))

    story.append(H(4, "Margin and Stop-Out Risk", S))
    story.append(P("The first margin call level is currently 150% and the stop-out level is currently 80%. If margin level falls to or below stop-out, positions may be closed automatically. Stop-out does not guarantee that losses will be limited to the account balance.", S))

    story.append(H(5, "Market Risk", S))
    story.append(P("Prices may move rapidly due to economic announcements, central bank decisions, geopolitical events, market openings, low liquidity, public holidays, weekend gaps, corporate actions or unexpected events. Orders may execute at prices different from those requested.", S))

    story.append(H(6, "Liquidity and Execution Risk", S))
    story.append(P("During volatile or illiquid conditions, spreads may widen, execution may be delayed, orders may be rejected, slippage may occur, and stop-loss orders may not execute at the requested price. The availability of liquidity can change without notice.", S))

    story.append(H(7, "Technology Risk", S))
    story.append(P("Trading depends on internet connectivity, devices, platforms, servers, data feeds, payment providers and third-party systems. Failures, delays, interruptions, cyber incidents or technical errors may affect trading, account access, deposits, withdrawals or execution.", S))

    story.append(H(8, "Crypto and Digital Asset Risk", S))
    story.append(P("Crypto-related instruments may be subject to extreme volatility, regulatory uncertainty, liquidity constraints, blockchain network congestion, wallet or address errors, irreversible transactions, forks, cyber risks and valuation uncertainty.", S))

    story.append(H(9, "No Investment Advice", S))
    story.append(P("The Company does not provide investment, legal, tax, accounting or financial planning advice unless expressly agreed in writing. Any market information, analysis or platform data is provided for informational purposes and should not be treated as a recommendation.", S))

    story.append(H(10, "Client Responsibility", S))
    story.append(P("The Client is responsible for monitoring positions, maintaining sufficient margin, understanding all costs and charges, protecting credentials, using risk controls and ensuring that trading is suitable for the Client's circumstances. Clients should seek independent advice where necessary.", S))

    story.append(Spacer(1, 16))
    story.append(P("For questions regarding this document, contact support@arkaltd.io or contacto@arkaltd.io.", S))
    return story


def build_terms(S):
    story = []
    story.append(Paragraph(INTRO_TEXT, S['intro_box']))
    story.append(company_table(S))
    story.append(Spacer(1, 14))

    story.append(H(1, "Parties and Acceptance", S))
    story.append(P("ARKA Global Liquidity Ltd. is an International Business Company incorporated in Saint Lucia under registration number 2025-00568. These documents apply to the website www.arkaltd.io, the trading environment branded as ARKA Global cTrader, and any related services made available by the Company.", S))
    story.append(P("This Client Agreement is made between the Client and the Company. The Client accepts this Agreement by completing the registration process, opening an account, ticking an acceptance box, depositing funds, accessing the platform or using any service. The Agreement becomes binding when the Company verifies and approves the Client according to internal onboarding and AML/KYC procedures.", S))

    story.append(H(2, "Services", S))
    story.append(P("The Company may provide online access to trading accounts, trading platforms, market information, order transmission, execution arrangements, account records, technical support, deposit and withdrawal processing, and other services made available from time to time. Services are provided through the internet and may depend on third-party technology, payment and infrastructure providers.", S))

    story.append(H(3, "Instruments and Risk", S))
    story.extend(bullets([
        "Foreign exchange and contracts for difference (CFDs).",
        "Spot metals, spot energies, indices, commodities, crypto-related instruments, shares CFDs, ETF CFDs, NDFs, and other instruments made available by the Company.",
        "Leveraged instruments settled in cash unless expressly stated otherwise.",
    ], S))
    story.append(P("Trading leveraged instruments involves significant risk. The Client may lose part or all of deposited funds and, where negative balance protection is not expressly provided, may incur additional obligations. The Client is responsible for understanding the risks before trading.", S))

    story.append(H(4, "Client Eligibility and Restricted Jurisdictions", S))
    story.append(P("The Client must have legal capacity, be at least the age of majority in the Client's jurisdiction, and must not be located in a restricted or sanctioned jurisdiction. The Company may restrict, reject or close accounts where the Client is located in a prohibited jurisdiction or where service would violate applicable law, internal policy or provider restrictions.", S))

    story.append(H(5, "Account Approval, KYC and Ongoing Review", S))
    story.append(P("The Company may request identity verification, proof of address, proof of funds, source of wealth, corporate documents, payment method ownership evidence, questionnaires or any other information required for onboarding, compliance, account review or suspicious activity investigation. The Company may refuse service or restrict accounts at its sole discretion where information is missing, expired, false, inconsistent or suspicious.", S))

    story.append(H(6, "Trading Authorization", S))
    story.append(P("The Client authorizes the Company to process instructions submitted through approved channels. The Client is responsible for all instructions submitted using the Client's credentials or by authorized representatives. The Client must protect access credentials and immediately notify the Company of unauthorized access or suspected compromise.", S))

    story.append(H(7, "Charges, Deposits and Withdrawals", S))
    story.append(P("The Client agrees to pay applicable spreads, commissions, markups, markdowns, swaps, administrative fees, statement fees, inactivity fees, payment charges, account transfer fees, introducing broker fees, money manager fees or other costs disclosed by the Company. Deposits and withdrawals are subject to the Deposits & Withdrawals Policy and AML/KYC controls. Third-party payments are prohibited unless expressly approved in writing.", S))

    story.append(H(8, "Leverage and Margin", S))
    story.append(P("The current maximum leverage is 1:200. The current first margin call level is 150%. The current stop-out level is 80%. The Company may change margin and leverage requirements at any time for risk, liquidity, provider, legal, technical or operational reasons.", S))

    story.append(H(9, "Prohibited Activities", S))
    story.extend(bullets([
        "Fraud, misrepresentation or use of false documents.",
        "Money laundering, terrorist financing, sanctions evasion or suspicious activity.",
        "Latency arbitrage, abusive scalping, high-frequency trading where prohibited, exploitation of off-market prices, technical abuse or platform manipulation.",
        "Unauthorized access, reverse engineering, copying, decompiling or misuse of Company systems, software or intellectual property.",
        "Third-party payments or transfers without approval.",
    ], S))

    story.append(H(10, "Limitation of Liability", S))
    story.append(P("The Company is not liable for losses arising from market movements, Client trading decisions, unauthorized use of credentials, internet failure, platform interruption, payment provider delay, blockchain errors, force majeure, off-market quotes or third-party systems, except where liability cannot be excluded by applicable law.", S))

    story.append(H(11, "Complaints and Disputes", S))
    story.append(P("Complaints must be submitted in writing to support@arkaltd.io according to the Complaints Policy. The Client should submit trading and transaction disputes within five business days of becoming aware of the issue. The governing law and jurisdiction are those of the Company's jurisdiction unless otherwise required by applicable law.", S))

    story.append(H(12, "Amendments and Termination", S))
    story.append(P("The Company may amend this Agreement and related policies by publishing updated versions on the website. The Company may suspend or terminate services where the Client breaches this Agreement, presents elevated risk, fails verification, engages in prohibited activity, or where legal, technical, provider or operational reasons require termination.", S))

    story.append(Spacer(1, 16))
    story.append(P("For questions regarding this document, contact support@arkaltd.io or contacto@arkaltd.io.", S))
    return story


# ─────────────────────────────────────────────────────────────────────────────
# Generate all PDFs
# ─────────────────────────────────────────────────────────────────────────────
DOCS = [
    {
        "filename": "00_legal_document_pack_index.pdf",
        "title":    "Legal Document Pack Index",
        "subtitle": "Index and platform parameter summary",
        "builder":  build_index,
    },
    {
        "filename": "aml_kyc_policy.pdf",
        "title":    "AML / KYC Policy",
        "subtitle": "Anti-money laundering, client verification and suspicious activity controls",
        "builder":  build_aml,
    },
    {
        "filename": "complaints_policy.pdf",
        "title":    "Complaints Policy",
        "subtitle": "Formal complaints, investigation, escalation and response procedure",
        "builder":  build_complaints,
    },
    {
        "filename": "conflicts_of_interest_policy.pdf",
        "title":    "Conflicts of Interest Policy",
        "subtitle": "Identification, prevention, management and disclosure of conflicts",
        "builder":  build_conflicts,
    },
    {
        "filename": "cookie_policy.pdf",
        "title":    "Cookie Policy",
        "subtitle": "Cookies, tracking technologies, website analytics and user controls",
        "builder":  build_cookie,
    },
    {
        "filename": "deposits_and_withdrawals_policy.pdf",
        "title":    "Deposits & Withdrawals Policy",
        "subtitle": "Funding, withdrawals, AML/KYC checks, processing times and restrictions",
        "builder":  build_deposits,
    },
    {
        "filename": "leverage_and_margin_policy.pdf",
        "title":    "Leverage & Margin Policy",
        "subtitle": "Leverage, margin call, stop-out, liquidation and negative balance risk",
        "builder":  build_leverage,
    },
    {
        "filename": "order_execution_policy.pdf",
        "title":    "Order Execution Policy",
        "subtitle": "Order handling, pricing, routing, slippage and execution disclosures",
        "builder":  build_order_execution,
    },
    {
        "filename": "privacy_policy.pdf",
        "title":    "Privacy Policy",
        "subtitle": "Personal data processing, retention, rights and security measures",
        "builder":  build_privacy,
    },
    {
        "filename": "risk_warning.pdf",
        "title":    "Risk Warning",
        "subtitle": "Material risk disclosure for leveraged financial products",
        "builder":  build_risk_warning,
    },
    {
        "filename": "terms_and_conditions.pdf",
        "title":    "Terms & Conditions",
        "subtitle": "Client agreement for brokerage and trading services",
        "builder":  build_terms,
    },
]

# Web-facing filenames (what the website uses)
WEB_MAP = {
    "aml_kyc_policy.pdf":          "aml-kyc-policy.pdf",
    "privacy_policy.pdf":          "privacy-policy.pdf",
    "risk_warning.pdf":            "risk-warning.pdf",
    "terms_and_conditions.pdf":    "terms-of-service.pdf",
}

OUTPUT_DIR = "/Users/gabriellopez/Documents/Arka LTD Webpage/ARKA_Legal_Documents_PDF_Pack"
WEB_DIR    = "/Users/gabriellopez/Documents/Arka LTD Webpage/arka-web/public/legal"


def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    os.makedirs(WEB_DIR,    exist_ok=True)

    S = make_styles()

    for doc in DOCS:
        out_path = os.path.join(OUTPUT_DIR, doc["filename"])
        print(f"Generating: {doc['filename']} ...", end=" ", flush=True)

        template = ArkaDoc(out_path, doc["title"], doc["subtitle"])
        story = doc["builder"](S)
        template.build(story)
        print("✓")

        # Copy to web dir if needed
        web_name = WEB_MAP.get(doc["filename"])
        if web_name:
            dst = os.path.join(WEB_DIR, web_name)
            shutil.copy2(out_path, dst)
            print(f"  → Copied to public/legal/{web_name}")

    print("\nAll PDFs generated successfully.")


if __name__ == "__main__":
    main()

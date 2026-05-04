# Human Review Gates

## Gates

| Gate | Workflow | Step | Reviewer role | Criteria |
|------|----------|------|--------------|----------|
| Reply Approval | customer-inquiry-triage | Draft reply | Team Member | Reply addresses the question, tone is appropriate, no unauthorized commitments |
| Refund or Discount Approval | customer-inquiry-triage | Financial review | Operations Manager or Owner | Amount within policy, situation justifies exception, financial impact understood |

## Gate details

### Gate: Reply Approval

**Workflow:** customer-inquiry-triage
**After step:** Draft reply
**Reviewer role:** Any team member handling inquiries

**What the reviewer checks:**
- [ ] Reply addresses the customer's actual question
- [ ] Tone is appropriate for the situation
- [ ] No commitments, discounts, or promises not authorized by a manager
- [ ] No incorrect information about services, pricing, or policies
- [ ] Customer name and details are correct

**If rejected:** Edit the reply and re-submit for review, or write a manual reply.

**If no review within timeout:** Inquiry stays in queue. Operations Manager is notified after 2 business hours.

**Evidence record required:** yes

### Gate: Refund or Discount Approval

**Workflow:** customer-inquiry-triage
**After step:** Financial review (when flagged)
**Reviewer role:** Operations Manager or Owner

**What the reviewer checks:**
- [ ] Refund or discount amount is within company policy
- [ ] Customer situation justifies the exception (if outside policy)
- [ ] Financial impact is understood and acceptable
- [ ] Reply language is clear about what is being offered

**If rejected:** Reply is revised to remove the financial commitment, or a different resolution is offered.

**If no review within timeout:** Reply is held. Owner is notified after 4 business hours.

**Evidence record required:** yes

## Escalation paths

- Team member unsure about a reply: escalate to Operations Manager.
- Operations Manager unsure about a financial decision: escalate to Owner.
- Refunds over 500 EUR: require Owner approval regardless.
- Discounts over 20%: require Owner approval regardless.

## Audit trail

Every review decision is recorded in an evidence file in `evidence/`. The record includes the original inquiry, AI classification, draft reply, reviewer name, decision (approved/rejected/edited), and timestamp.

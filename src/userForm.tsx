import { FormWrapper } from "./formWrapper"

type UserData = {
  carrierName: string
  carrierAddress: string
  mcnumber: string
  dotnumber: string
  emailAddress: string
  phoneNumber: string
}

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void
}

export function UserForm({
  carrierName,
  carrierAddress,
  mcnumber,
  dotnumber,
  emailAddress,
  phoneNumber,
  updateFields,
}: UserFormProps) {
  return (
    <FormWrapper title="Carrier Information">
      <form>
      <label>Carrier Name</label>
      <input
        autoFocus
        required
        type="text"
        value={carrierName}
        onChange={e => updateFields({ carrierName: e.target.value })}
      />
      <label>Carrier Address</label>
      <input
        required
        type="text"
        value={carrierAddress}
        onChange={e => updateFields({ carrierAddress: e.target.value })}
      />
      <label>MC Number</label>
      <input
        required
        min={1}
        type="text"
        value={mcnumber}
        onChange={e => updateFields({ mcnumber: e.target.value })}
      />
      <label>DOT Number</label>
      <input
        required
        min={1}
        type="text"
        value={dotnumber}
        onChange={e => updateFields({ dotnumber: e.target.value })}
      />
      <label>Phone Number</label>
      <input
        required
        min={1}
        type="number"
        value={phoneNumber}
        onChange={e => updateFields({ phoneNumber: e.target.value })}
      />
      <label>Email Address</label>
      <input
        required
        min={1}
        type="text"
        value={emailAddress}
        onChange={e => updateFields({ emailAddress: e.target.value })}
      />
      </form>
    </FormWrapper>
  )
}
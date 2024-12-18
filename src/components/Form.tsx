import {Form, Input, Button} from "@nextui-org/react";
import {useState} from 'react'

export default function FormElement() {
    
  const [action, setAction] = useState<string | null>(null);

  return (
    <Form
      className="items-center justify-center"
      validationBehavior="native"
      onReset={() => setAction("reset")}
      onSubmit={(e) => {
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.currentTarget));
        setAction(`submit ${JSON.stringify(data)}`);
      }}
    >
      <Input
        isRequired
        errorMessage="Please enter a valid username"
        label="To Do Task"
        labelPlacement="outside"
        name="username"
        placeholder="Enter your Task"
        type="text"
        className="h-32 p-32"
      />

      <div className="flex gap-2">
        <Button color="primary" type="submit">
          Submit
        </Button>
        <Button type="reset" variant="flat">
          Reset
        </Button>
      </div>
      {action && (
        <div className="text-small text-default-500">
          Action: <code>{action}</code>
        </div>
      )}
    </Form>
  );
}


// import { Avatar, AvatarFallback, AvatarImage } from "@nextui-org/avatar";

import { Button } from "@nextui-org/button";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem
} from "@nextui-org/dropdown";
import { UserAccountLink } from "./userAccountLink";

export function UserMenu() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button className='w-[10%] rounded-lg'
          variant="bordered"
        >
          Super Admin
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">Ogundele Olamide</p>
            <p className="text-xs leading-none text-muted-foreground">
              m@example.com
            </p>
          </div>
        </DropdownItem>
        <DropdownItem key="new">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">Ogundele Olamide</p>
            <p className="text-xs leading-none text-muted-foreground">
              m@example.com
            </p>
          </div>
        </DropdownItem>
        <DropdownItem key="new">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">Ogundele Olamide</p>
            <p className="text-xs leading-none text-muted-foreground">
              m@example.com
            </p>
          </div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
    // <Dropdown>
    //   <DropdownTrigger>
    //     <Button variant="ghost" className="relative h-8 w-fit rounded-full">
    //       <Avatar className="h-8 w-8  border border-ring">
    //         <AvatarImage src="/avatars/01.png" alt="@shadcn" />
    //         <AvatarFallback>OO</AvatarFallback>
    //       </Avatar>
    //       <p className="p-2 ">Super Admin</p>
    //     </Button>
    //   </DropdownTrigger>
    //   <DropdownMenu className="w-56" align="end" forceMount>
    //     <DropdownMenu className="font-normal bg-accent p-2">
    //       <div className="flex flex-col space-y-1">
    //         <p className="text-sm font-medium leading-none">Ogundele Olamide</p>
    //         <p className="text-xs leading-none text-muted-foreground">
    //           m@example.com
    //         </p>
    //       </div>
    //     </DropdownMenu>
    //     <DropdownMenu />
    //     <p className="pb-2 opacity-60 text-sm">Other accounts</p>
    //     {/* NOTE: Account - Switch */}
    //     <DropdownItem>
    //       <UserAccountLink />
    //     </DropdownItem>
    //     <DropdownItem>
    //     <UserAccountLink />
    //     </DropdownItem>
    //     <DropdownItem>
    //     <UserAccountLink />
    //     </DropdownItem>

    //     {/* <DropdownSeparator /> */}
    //     <DropdownMenu>
    //       <DropdownItem>
    //         Profile
    //         <DropdownItem>⇧⌘P</DropdownItem>
    //       </DropdownItem>
    //       <DropdownItem>
    //         Billing
    //         <DropdownItem>⌘B</DropdownItem>
    //       </DropdownItem>
    //       <DropdownItem>
    //         Settings
    //         <DropdownItem>⌘S</DropdownItem>
    //       </DropdownItem>
    //       <DropdownItem>New Team</DropdownItem>
    //       <DropdownItem>
    //       Log out
    //       <DropdownItem>⇧⌘Q</DropdownItem>
    //     </DropdownItem>
    //     </DropdownMenu>
    //   </DropdownMenu>
    // </Dropdown>
  );
}

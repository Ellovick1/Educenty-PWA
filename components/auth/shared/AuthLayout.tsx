import AuthHeader from "./AuthHeader";
import AuthLeftBar from "./AuthSideBar";
import AuthFooter from "./AuthFooter";
import { Card } from "@nextui-org/card";

interface AuthLayoutProps {
	children: React.ReactNode;
}

function AuthLayout({ children }: AuthLayoutProps) {
	return (
		<div className='h-full hidden md:grid grid-cols-3'>
			<AuthLeftBar />

			<div className="mx-auto flex w-full flex-col justify-between space-y-6 lg:max-w-sm border-none">
				<AuthHeader />
				<div className="">{children}</div>
				<AuthFooter />
			</div>

		</div>
	);
}

export default AuthLayout;

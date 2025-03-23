import { IntegrationList } from "./integration-list";
import { RegisteredUsers } from "./registered-users";

export const UsersIntegration = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RegisteredUsers/>
            <IntegrationList/>
        </div>
    )
};
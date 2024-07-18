export enum ProjectStatus {
    WAITING_TO_START = 'waiting_to_start',
    PRESALE_ONGOING = 'presale_ongoing',
    PRESALE_ENDED = 'presale_ended',
    CLAIM_AVAILABLE = 'claim_available',
  }


  export interface TokenDetails {
    uuid: string;
    token_name: string;
    token_symbol: string;
    token_description: string;
    total_supply: string;
    target_soft_cap: string;
    limit_per_user: number | string;
    total_cap_raised: string
    liquidity_percentage: string;
    fair_launch_allocation: string;
    dex_listing: string;
    marketing_team_allocation: string;
    team_and_member_allocation: string;
    is_approved: boolean;
    is_deleted: boolean;
    presale_contract_address: string | null;
    token_contract_address: string | null;
    start_time: string | null;
    end_time: string | null;
    status: ProjectStatus;
    created_at: string;
    updated_at: string;
  }
  
  
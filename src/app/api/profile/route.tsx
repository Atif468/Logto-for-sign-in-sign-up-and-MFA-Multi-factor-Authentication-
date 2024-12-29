import { getLogtoContext } from '@logto/next/server-actions';
import { logtoConfig } from '../../logto';

export const dynamic = 'force-dynamic';

export async function GET() {
  const { claims } = await getLogtoContext(logtoConfig);

  return Response.json({ claims });
}